import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
  recaptchaToken: z.string(),
});

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error('reCAPTCHA secret key not set');
  const res = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/intrawebtech/assessments?key=${secret}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: {
        token,
        siteKey: '6LcoBEwrAAAAAG4CiAT9uydgXIzGX1ZlvfwdwAlR',
        expectedAction: 'CONTACT_FORM',
      },
    }),
  });
  const data = await res.json();
  // Check for success and risk score (adjust threshold as needed)
  return data.tokenProperties?.valid && (!data.riskAnalysis || data.riskAnalysis.score > 0.5);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!recaptchaValid) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
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