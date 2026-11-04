import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { nombre, correo, mensaje } = await req.json();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { mensaje: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: correo,
      subject: `Mensaje de portafolio: ${nombre}`,
      text: `
Nombre: ${nombre}
Correo: ${correo}

Mensaje:
${mensaje}
      `,
    });

    return NextResponse.json({
      mensaje: "Mensaje enviado correctamente",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { mensaje: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}