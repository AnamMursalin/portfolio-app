import { NextRequest, NextResponse } from "next/server";
import { InMemoryFeedbackStore } from "@/lib/feedback";

const feedbackStore = new InMemoryFeedbackStore();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, name, email, comment } = body;

    // Validation
    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!comment || comment.trim().length < 5) {
      return NextResponse.json(
        { error: "Comment must be at least 5 characters" },
        { status: 400 }
      );
    }

    // Sanitize
    const sanitizedName = name.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedComment = comment.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const feedback = feedbackStore.submit({
      projectId,
      name: sanitizedName,
      email: email?.trim(),
      comment: sanitizedComment,
    });

    return NextResponse.json(
      { success: true, message: "Thank you for your feedback!", id: feedback.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
