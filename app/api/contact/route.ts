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
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

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