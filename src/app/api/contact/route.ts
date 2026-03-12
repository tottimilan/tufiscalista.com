import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Tu Fiscalista <no-reply@tufiscalista.com>",
      to: "info@tufiscalista.com",
      replyTo: email,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
