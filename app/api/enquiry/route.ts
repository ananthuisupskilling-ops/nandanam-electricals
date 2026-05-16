import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "@/data/site";
import { enquiryMessage } from "@/lib/utils";

type EnquiryPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  location?: string;
  service?: string;
  capacity?: string;
  message?: string;
};

function isConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.ENQUIRY_TO_EMAIL
  );
}

export async function POST(request: Request) {
  const payload = (await request.json()) as EnquiryPayload;

  if (!payload.fullName || !payload.phone || !payload.service) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and service are required." },
      { status: 400 }
    );
  }

  if (!isConfigured()) {
    return NextResponse.json({
      ok: true,
      emailSent: false,
      message: "SMTP is not configured. WhatsApp enquiry is ready."
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const text = enquiryMessage({
    fullName: payload.fullName || "",
    phone: payload.phone || "",
    email: payload.email || "",
    location: payload.location || "",
    service: payload.service || "",
    capacity: payload.capacity || "",
    message: payload.message || ""
  });

  await transporter.sendMail({
    to: process.env.ENQUIRY_TO_EMAIL,
    from: process.env.ENQUIRY_FROM_EMAIL || process.env.SMTP_USER,
    subject: `New website enquiry - ${company.shortName}`,
    text
  });

  return NextResponse.json({ ok: true, emailSent: true });
}
