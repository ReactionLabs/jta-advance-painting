import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, message, "cf-turnstile-response": turnstileToken } = body

  const res = await fetch("https://forms.secondshift.site/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client: "jta-advance-painting",
      name,
      email,
      phone,
      message,
      source: "jtaadvancepainting.com contact form",
      // Turnstile pre-wire: forwarded through only when the snippet is active
      "cf-turnstile-response": turnstileToken || undefined,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    console.error("Second Shift submit failed:", res.status, detail)
    return NextResponse.json(
      { message: "Something went wrong. Please call us at 813-392-8301." },
      { status: 502 }
    )
  }

  return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
}
