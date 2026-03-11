import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: integrate Resend for email notifications
    // For now, log the application
    console.log("New application received:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error processing application" },
      { status: 500 }
    );
  }
}
