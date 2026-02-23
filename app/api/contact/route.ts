/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs" // ✅ force Node runtime

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email)
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(req: Request) {
  try {
    // -------- Parse body
    const body = await req.json().catch(() => null)

    const name = String(body?.name ?? "").trim()
    const email = String(body?.email ?? "").trim()
    const company = String(body?.company ?? "").trim()
    const message = String(body?.message ?? "").trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 })
    }

    // -------- Env
    const GMAIL_USER = process.env.GMAIL_USER
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
    const CONTACT_TO = process.env.CONTACT_TO || GMAIL_USER

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO) {
      return NextResponse.json(
        {
          error:
            "Config email manquante. Vérifie GMAIL_USER / GMAIL_APP_PASSWORD / CONTACT_TO.",
        },
        { status: 500 }
      )
    }

    // -------- META
    const headers = req.headers
    const userAgent = headers.get("user-agent") || "Inconnu"
    const referer = headers.get("referer") || "Direct / inconnu"
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      "Inconnue"

    const now = new Date()
    const dateFR = now.toLocaleString("fr-FR", { timeZone: "Europe/Paris" })

    // -------- Transport (SMTP Gmail)
    const isDev = process.env.NODE_ENV !== "production"

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
      // ⚠️ DEV ONLY: évite l'erreur "self-signed certificate"
      ...(isDev ? { tls: { rejectUnauthorized: false } } : {}),
    })

    // Donne une erreur claire si auth / TLS / réseau
    await transporter.verify()

    // -------- Email content
    const subject = `Nouveau message — ${name}${company ? ` (${company})` : ""}`
    const h = (s: string) => escapeHtml(String(s || ""))

    const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
      `Re: ${subject}`
    )}`

    await transporter.sendMail({
      from: `"Independant Studio" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject,

      // ✅ TEXTE
      text: [
        `NOUVEAU MESSAGE (site)`,
        `Date: ${dateFR}`,
        "",
        `Nom: ${name}`,
        `Email: ${email}`,
        `Entreprise: ${company || "(non renseignée)"}`,
        "",
        `Message:`,
        message,
        "",
        `--- META ---`,
        `Page: ${referer}`,
        `IP: ${ip}`,
        `User-Agent: ${userAgent}`,
      ].join("\n"),

      // ✅ HTML (premium)
      html: `
<div style="margin:0;padding:0;background:#0b0b0d;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 0;">
    <tr>
      <td align="center" style="padding:0 16px;">
        <table width="640" style="max-width:640px;width:100%;">
          
          <!-- HEADER -->
          <tr>
            <td style="padding:18px;">
              <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;color:#fff;">
                <div style="font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:rgba(255,255,255,0.6);">
                  Nouveau message (site)
                </div>
                <div style="margin-top:10px;font-size:22px;font-weight:800;">
                  ${h(name)}
                  ${
                    company
                      ? `<span style="font-weight:600;color:rgba(255,255,255,0.7);"> — ${h(
                          company
                        )}</span>`
                      : ""
                  }
                </div>
                <div style="margin-top:6px;font-size:13px;color:rgba(255,255,255,0.5);">
                  Reçu le ${h(dateFR)}
                </div>
              </div>
            </td>
          </tr>

          <!-- CARD -->
          <tr>
            <td style="padding:0 18px 18px;">
              <table width="100%" cellpadding="0" cellspacing="0"
                style="background:rgba(255,255,255,0.06);
                       border:1px solid rgba(255,255,255,0.1);
                       border-radius:22px;overflow:hidden;">
                <tr>
                  <td style="height:3px;background:linear-gradient(90deg,transparent,#2e8a96,transparent);"></td>
                </tr>

                <tr>
                  <td style="padding:18px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;color:#fff;">
                    
                    <!-- INFOS -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                      <tr>
                        <td style="padding:10px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:rgba(0,0,0,0.25);">
                          <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:rgba(255,255,255,0.55);">Email</div>
                          <div style="margin-top:6px;font-size:14px;font-weight:700;">
                            <a href="mailto:${h(email)}" style="color:#fff;text-decoration:none;">${h(
    email
  )}</a>
                          </div>
                        </td>
                        <td width="12"></td>
                        <td style="padding:10px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:rgba(0,0,0,0.25);">
                          <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:rgba(255,255,255,0.55);">Entreprise</div>
                          <div style="margin-top:6px;font-size:14px;font-weight:700;">
                            ${h(company || "—")}
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- MESSAGE -->
                    <div style="padding:14px;border-radius:18px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.1);">
                      <div style="font-size:12px;letter-spacing:0.26em;text-transform:uppercase;color:rgba(255,255,255,0.55);margin-bottom:10px;">
                        Message
                      </div>
                      <div style="font-size:15px;line-height:1.6;white-space:pre-wrap;">
                        ${h(message)}
                      </div>
                    </div>

                    <!-- CTA -->
                    <div style="margin-top:16px;">
                      <a href="${replyHref}"
                        style="display:inline-block;background:#2e8a96;color:#0b0b0d;
                               font-weight:800;padding:12px 16px;border-radius:999px;
                               text-decoration:none;font-size:14px;">
                        Répondre →
                      </a>
                      <span style="display:inline-block;margin-left:10px;font-size:12px;color:rgba(255,255,255,0.5);">
                        (Reply-To activé)
                      </span>
                    </div>

                    <!-- META -->
                    <div style="margin-top:18px;padding-top:14px;border-top:1px dashed rgba(255,255,255,0.15);
                                font-size:12px;line-height:1.6;color:rgba(255,255,255,0.5);">
                      <div style="letter-spacing:0.22em;text-transform:uppercase;margin-bottom:6px;">
                        Meta
                      </div>
                      <div><b>Page :</b> ${h(referer)}</div>
                      <div><b>IP :</b> ${h(ip)}</div>
                      <div><b>Device :</b> ${h(userAgent)}</div>
                    </div>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:0 18px 12px;font-size:12px;color:rgba(255,255,255,0.4);">
              Independant Studio • Formulaire du site
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err)
    const isDev = process.env.NODE_ENV !== "production"
    return NextResponse.json(
      {
        error: "Impossible d’envoyer le message.",
        detail: isDev ? String(err?.message ?? err) : undefined,
      },
      { status: 500 }
    )
  }
}