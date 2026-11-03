import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, empresa, email, cargo, interes } = body;

    // Validación básica de campos requeridos
    if (!nombre || !empresa || !email) {
      return NextResponse.json(
        { success: false, message: "Por favor completá los campos obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL;

    // Si la API key aún es la de ejemplo o no está configurada, devolvemos aviso
    if (!apiKey || apiKey.startsWith("re_123456789") || !recipientEmail) {
      console.warn("⚠️ Resend no está configurado todavía con una clave real en .env");
      return NextResponse.json({
        success: true,
        message: "Solicitud registrada localmente (pendiente configurar API Key real de Resend).",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Financhx Leads <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `🚀 Nuevo Lead de Acceso Anticipado: ${nombre} (${empresa})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d0d0d; color: #ffffff; padding: 32px; border-radius: 16px; border: 1px solid #262626;">
          <h2 style="margin-top: 0; color: #ffffff; border-bottom: 1px solid #262626; padding-bottom: 16px; font-size: 20px;">
            Nuevo registro de Acceso Anticipado
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3; width: 140px;">Nombre:</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3;">Empresa:</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3;">Email Corporativo:</td>
              <td style="padding: 10px 0; color: #ffffff;">
                <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3;">Cargo:</td>
              <td style="padding: 10px 0; color: #ffffff;">${cargo || "No especificado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3;">Módulo de Interés:</td>
              <td style="padding: 10px 0; color: #ffffff;">${interes || "General"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a3a3a3;">Fecha:</td>
              <td style="padding: 10px 0; color: #737373;">${new Date().toLocaleString("es-AR")}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #262626; font-size: 12px; color: #737373; text-align: center;">
            Financhx — Financial Operating System
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error("Error al enviar con Resend:", data.error);
      return NextResponse.json(
        { success: false, message: data.error.message || "Error al enviar el correo con Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud registrada con éxito. Nos pondremos en contacto a la brevedad.",
    });
  } catch (error: any) {
    console.error("Error en endpoint /api/early-access:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor al procesar la solicitud." },
      { status: 500 }
    );
  }
}
