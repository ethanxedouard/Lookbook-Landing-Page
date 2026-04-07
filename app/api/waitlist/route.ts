import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const { name,email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await db.collection("waitlist").add({
      name: name || "Anonymous",
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
