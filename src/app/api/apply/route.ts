import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, telefono, tipo, facturacion, mensaje } = data;

    await resend.emails.send({
      from: "Tu Fiscalista <no-reply@tufiscalista.com>",
      to: "info@tufiscalista.com",
      replyTo: email,
      subject: `Nueva solicitud: ${nombre} (${tipo})`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C8A977; border-bottom: 1px solid #253041; padding-bottom: 12px;">
            Nueva solicitud de plaza
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D; width: 140px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D;">Teléfono</td>
              <td style="padding: 8px 0;"><a href="tel:${telefono}">${telefono}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D;">Tipo</td>
              <td style="padding: 8px 0;">${tipo === "autonomo" ? "Autónomo" : "Pyme / SL"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D;">Facturación</td>
              <td style="padding: 8px 0;">${facturacion}</td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding: 8px 0; color: #6B7A8D; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0;">${mensaje}</td>
            </tr>
            ` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #6B7A8D;">
            Puedes responder directamente a este email para contactar con ${nombre}.
          </p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Tu Fiscalista <no-reply@tufiscalista.com>",
      to: email,
      subject: "Hemos recibido tu solicitud — Tu Fiscalista",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #F5F7FA;">
          <div style="text-align: center; padding: 32px 0; border-bottom: 1px solid #253041;">
            <h1 style="font-family: Georgia, serif; font-size: 28px; color: #C8A977; margin: 0;">
              Tu Fiscalista
            </h1>
          </div>
          <div style="padding: 32px 0;">
            <p style="font-size: 18px; margin: 0 0 16px;">
              Hola ${nombre},
            </p>
            <p style="margin: 0 0 16px; color: #A7B0BE; line-height: 1.6;">
              Hemos recibido tu solicitud correctamente. Nuestro equipo revisará
              tu caso y te contactaremos en un plazo máximo de <strong style="color: #F5F7FA;">48 horas laborables</strong>.
            </p>
            <p style="margin: 0 0 16px; color: #A7B0BE; line-height: 1.6;">
              Si tienes cualquier duda urgente, puedes escribirnos directamente a
              <a href="mailto:info@tufiscalista.com" style="color: #C8A977;">info@tufiscalista.com</a>.
            </p>
            <p style="margin: 24px 0 0; color: #A7B0BE;">
              Un saludo,<br />
              <strong style="color: #F5F7FA;">El equipo de Tu Fiscalista</strong>
            </p>
          </div>
          <div style="border-top: 1px solid #253041; padding-top: 16px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6B7A8D;">
              tufiscalista.com · Asesoría fiscal boutique
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error processing application" },
      { status: 500 }
    );
  }
}
