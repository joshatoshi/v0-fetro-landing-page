const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let email: unknown

  try {
    const body = await request.json()
    email = body?.email
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim()) || email.length > 254) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

  if (!webhookUrl) {
    console.log("[v0] GOOGLE_SHEETS_WEBHOOK_URL is not configured")
    return Response.json({ error: "Signups are not configured yet." }, { status: 500 })
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        source: "fetro.dev",
        timestamp: new Date().toISOString(),
      }),
      redirect: "follow",
      cache: "no-store",
    })

    if (!response.ok) {
      console.log("[v0] Sheets webhook responded with status:", response.status)
      return Response.json({ error: "Could not save your email. Please try again." }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (error) {
    console.log("[v0] Sheets webhook request failed:", error instanceof Error ? error.message : error)
    return Response.json({ error: "Could not save your email. Please try again." }, { status: 502 })
  }
}
