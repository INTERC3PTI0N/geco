import { NextResponse } from "next/server";
import { Resend } from "resend";

const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const RECIPIENT = "khalid@geco-trade.com";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body || {};

  if (!name || String(name).trim().length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!message || String(message).trim().length < 5) {
    return NextResponse.json({ error: "Please add a short message." }, { status: 422 });
  }

  const enquiry = {
    name: String(name).trim(),
    company: body.company || "",
    email: String(email).trim(),
    phone: body.phone || "",
    product: body.product || "",
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };
  console.log("[GECO contact enquiry]", enquiry);

  if (!process.env.RESEND_API_KEY) {
    console.error("[GECO contact enquiry] RESEND_API_KEY is not set — email not sent.");
    return NextResponse.json({ error: "Email service is not configured yet. Please try again later." }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Geco Trading Corporation <onboarding@resend.dev>",
      to: [RECIPIENT],
      replyTo: enquiry.email,
      subject: `New enquiry from ${enquiry.name}${enquiry.product ? ` — ${enquiry.product}` : ""}`,
      html: `
        <h2>New website enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(enquiry.name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(enquiry.company)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(enquiry.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(enquiry.phone)}</td></tr>
          <tr><td><strong>Product of interest</strong></td><td>${escapeHtml(enquiry.product)}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(enquiry.message).replace(/\n/g, "<br/>")}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;">Received ${enquiry.receivedAt} via geco-trade.com contact form.</p>
      `,
    });

    if (error) {
      console.error("[GECO contact enquiry] Resend error:", error);
      return NextResponse.json({ error: "We couldn't send your enquiry right now. Please try again shortly." }, { status: 502 });
    }
  } catch (err) {
    console.error("[GECO contact enquiry] Unexpected email error:", err);
    return NextResponse.json({ error: "We couldn't send your enquiry right now. Please try again shortly." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — your enquiry has reached our team. We'll respond shortly.",
  });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
