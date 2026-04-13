import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import {
  isRateLimited,
  getClientIp,
  isValidOrigin,
} from "@/lib/antispam";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email(),
  magnetId: z.string().min(1).max(100),
});

const MAGNETS: Record<string, { name: string; url: string }> = {
  "checklist-trimestral": {
    name: "Checklist Trimestral del Autónomo",
    url: "/recursos/checklist-trimestral.pdf",
  },
  "guia-deducciones": {
    name: "Guía de Deducciones para Autónomos",
    url: "/recursos/guia-deducciones.pdf",
  },
  "calendario-fiscal-pdf": {
    name: "Calendario Fiscal 2026 (PDF)",
    url: "/recursos/calendario-fiscal-2026.pdf",
  },
};

export async function POST(request: Request) {
  if (!isValidOrigin(request)) {
    return NextResponse.json({ error: "Origen no válido" }, { status: 403 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { email, magnetId } = parsed.data;
  const magnet = MAGNETS[magnetId];

  if (!magnet) {
    return NextResponse.json({ error: "Recurso no encontrado" }, { status: 404 });
  }

  try {
    await resend.emails.send({
      from: `Tu Fiscalista <${process.env.EMAIL_FROM ?? "noreply@tufiscalista.com"}>`,
      to: email,
      subject: `Tu recurso: ${magnet.name}`,
      html: `
        <p>Hola,</p>
        <p>Aquí tienes tu descarga: <strong>${magnet.name}</strong></p>
        <p><a href="https://tufiscalista.com${magnet.url}">Descargar ahora</a></p>
        <p>Si tienes preguntas sobre tu situación fiscal, no dudes en <a href="https://tufiscalista.com/aplicar">solicitar un diagnóstico gratuito</a>.</p>
        <p>— El equipo de Tu Fiscalista</p>
      `,
    });
  } catch {
    // Email delivery failure should not block the download
  }

  return NextResponse.json({ ok: true });
}
