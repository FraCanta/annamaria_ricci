// pages/api/contatti.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { nome, email, messaggio } = req.body;

  if (!nome || !email || !messaggio) {
    return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
  }

  try {
    // Configura il transporter SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.it",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenuto email
    await transporter.sendMail({
      from: `"Anna Maria Ricci" <welcome@annamariaricci.eu>`,
      to: ["welcome@annamariaricci.eu"], // la tua mail destinataria
      subject: "Nuovo messaggio dal form respiro",
      replyTo: `${email}`,

      html: `
        <h3>Hai ricevuto un nuovo messaggio:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong><br/>${messaggio}</p>
      `,
    });

    const thankHtml = `
   <html lang="it">
  <head>
    <style>
      .container {
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      .heading {
        font-size: 24px;
        font-weight: bold;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
     
    </style>
  </head>
  <body>
    <div class="container">
      <p>Ciao ${nome},</p>
      <p>Grazie per avermi contattata.</p>
      <p>Entro 72 ore riceverai una mia risposta.</p>

      <p>Saluti,<br>Anna Maria Ricci</p>
    </div>
    
  </body>
</html>

  `;

    // Invia l'email di ringraziamento all'utente
    await transporter.sendMail({
      from: `Anna Maria Ricci <welcome@annamariaricci.eu>`,
      to: email,
      subject: "Grazie per avermi contattata",
      html: thankHtml,
    });

    return res.status(200).json({ message: "Messaggio inviato con successo!" });
  } catch (error) {
    console.error("Errore invio email:", error);
    return res
      .status(500)
      .json({ message: "Errore durante l'invio della mail" });
  }
}
