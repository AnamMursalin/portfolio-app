import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, reason, message } = body;

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!reason) {
      return NextResponse.json(
        { error: "Please select a reason for contact" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: name.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      email: email.trim(),
      reason: reason.trim(),
      message: message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    };

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['anam985fatima@gmail.com'],
      subject: `New Message from ${sanitized.name}: ${sanitized.reason}`,
      reply_to: sanitized.email,
      text: `Name: ${sanitized.name}\nEmail: ${sanitized.email}\nReason: ${sanitized.reason}\n\nMessage:\n${sanitized.message}`,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
