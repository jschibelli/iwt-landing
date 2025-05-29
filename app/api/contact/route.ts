import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
  recaptchaToken: z.string(),
});

type VerifyRecaptchaParams = {
  token: string;
  action: string;
};

async function verifyRecaptcha({ token, action }: VerifyRecaptchaParams): Promise<boolean> {
  const apiKey = process.env.RECAPTCHA_API_KEY;
  if (!apiKey) {
    console.error('reCAPTCHA API key not set in environment variables');
    return false;
  }
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/intrawebtech/assessments?key=${apiKey}`;
  const body = {
    event: {
      token,
      expectedAction: action,
      siteKey: "6LckZE4rAAAADYbgtBw5Zr-oazauVc7rKlBGpHL",
    },
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("reCAPTCHA REST API error:", errorText);
      return false;
    }
    const data = await res.json();
    console.log('reCAPTCHA verification response:', data);
    if (!data.tokenProperties || !data.tokenProperties.valid) {
      console.error(`reCAPTCHA token invalid: ${data.tokenProperties?.invalidReason}`);
      return false;
    }
    if (data.tokenProperties.action !== action) {
      console.error("reCAPTCHA action mismatch");
      return false;
    }
    if (!data.riskAnalysis || typeof data.riskAnalysis.score !== "number") {
      console.error("reCAPTCHA risk analysis missing");
      return false;
    }
    // Lowered risk score threshold for testing
    return data.riskAnalysis.score >= 0.1;
  } catch (error) {
    console.error("Error verifying reCAPTCHA via REST API:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha({
      token: validatedData.recaptchaToken,
      action: "CONTACT_FORM",
    });
    if (!recaptchaValid) {
      return NextResponse.json({ message: "reCAPTCHA verification failed" }, { status: 400 });
    }

    const { name, email, company, service, message } = validatedData;

    const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Email: ${email}
      ${company ? `Company: ${company}` : ""}
      ${service ? `Service Interested In: ${service}` : ""}
      
      Message:
      ${message}
    `;

    await resend.emails.send({
      from: "IntraWeb Contact Form <contact@intrawebtech.com>",
      to: process.env.CONTACT_EMAIL || "contact@intrawebtech.com",
      subject: "New Contact Form Submission",
      text: emailContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
} 