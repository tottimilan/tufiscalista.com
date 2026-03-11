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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error processing application" },
      { status: 500 }
    );
  }
}
