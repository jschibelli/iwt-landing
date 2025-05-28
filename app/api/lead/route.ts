import { NextResponse } from 'next/server';
import { getZohoAccessToken } from '@/lib/zohoClient';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional(),
  service: z.string().optional(),
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
    const validatedData = leadSchema.parse(body);

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!recaptchaValid) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    const credentials = await getZohoAccessToken();

    // Prepare lead data for Zoho CRM
    const leadData = {
      data: [{
        Last_Name: validatedData.name,
        Email: validatedData.email,
        Description: validatedData.message,
        Lead_Source: "Website",
        ...(validatedData.company && { Company: validatedData.company }),
        ...(validatedData.service && { Service_Interested: validatedData.service })
      }]
    };

    const response = await fetch(`${credentials.api_domain}/crm/v2/Leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${credentials.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to create lead in Zoho CRM: ${error}`);
    }

    return NextResponse.json(
      { message: "Lead created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead creation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to create lead" },
      { status: 500 }
    );
  }
} 