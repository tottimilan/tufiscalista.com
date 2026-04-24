import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import {
  isRateLimited,
  getClientIp,
  isHoneypotFilled,
  isTooFast,
  verifyTurnstile,
  isValidOrigin,
} from "@/lib/antispam";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "soyelasesorfiscal@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM ?? "onboarding@resend.dev";
const FROM_HEADER = `Tu Fiscalista <${EMAIL_FROM}>`;

const contactSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email().max(254),
  mensaje: z.string().min(10).max(5000),
  _t: z.number().optional(),
  _turnstile: z.string().optional(),
  website: z.string().max(0).optional(),
  _gotcha: z.string().max(0).optional(),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    if (!isValidOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Espera un momento." },
        { status: 429 }
      );
    }

    const raw = await request.json();
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos" },
        { status: 400 }
      );
    }

    const body = parsed.data;

    if (isHoneypotFilled(body as Record<string, unknown>)) {
      return NextResponse.json({ success: true });
    }

    if (isTooFast(body._t)) {
      return NextResponse.json({ success: true });
    }

    const turnstileOk = await verifyTurnstile(body._turnstile, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "Verificación fallida. Recarga la página." },
        { status: 403 }
      );
    }

    const nombre = escapeHtml(body.nombre);
    const email = escapeHtml(body.email);
    const mensaje = escapeHtml(body.mensaje);

    const result = await resend.emails.send({
      from: FROM_HEADER,
      to: CONTACT_EMAIL,
      replyTo: body.email,
      subject: `Mensaje de contacto: ${nombre}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C8A977; border-bottom: 1px solid #253041; padding-bottom: 12px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #111827; border-radius: 8px;">
            <p style="margin: 0; color: #F5F7FA; white-space: pre-wrap;">${mensaje}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #6B7A8D;">
            Puedes responder directamente a este email para contactar con ${nombre}.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend contact error:", result.error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
