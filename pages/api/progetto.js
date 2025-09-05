import nodemailer from "nodemailer";

// Utilizza variabili d'ambiente per le credenziali

export default async function mailer(req, res) {
  const { name, email, goal, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // HTML per l'email
  const emailHtml = `
    <html lang="it">
      <head>
        <style>
          .container { padding: 20px; background-color: #ffffff; border: 1px solid #cccccc; border-radius: 5px; }
          .heading { font-size: 24px; font-weight: bold; }
          .section { margin-bottom: 20px; }
          .bold { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="section">
            <img src="https://i.ibb.co/Cvq40Hs/logo-new.webp" alt="Logo dell'azienda" style="width: 100px;"/>
          </div>
          <div class="section">
            <div class="bold">Motivo del contatto:</div>
            <p>${goal.join(", ")}</p>
          </div>
          <div class="section">
            <p><span class="bold">Nome:</span> ${name}</p>
            <p><span class="bold">Email:</span> ${email}</p>
          </div>
          
          <div class="section">
            <div class="heading">Note</div>
            <p>${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;

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
      <p>Ciao ${name},</p>
      <p>Grazie per avermi contattata. Ho ricevuto la tua richiesta e sono felice di offrirti un incontro per discutere ulteriormente.</p>
      <p>Entro 72 ore riceverai una mia risposta.</p>

      <p>Saluti,<br>Anna Maria Ricci</p>
    </div>
    
  </body>
</html>

  `;

  try {
    // Invia l'email a te stesso
    await transporter.sendMail({
      from: `Anna Maria Ricci <welcome@annamariaricci.eu>`,
      to: ["welcome@annamariaricci.eu"],
      subject: `Richiesta prenotazione call: ${name}`,
      replyTo: email,
      html: emailHtml,
    });

    // Invia l'email di ringraziamento all'utente
    await transporter.sendMail({
      from: `Anna Maria Ricci <welcome@annamariaricci.eu>`,
      to: email,
      subject: "Grazie per avermi contattata",
      html: thankHtml,
    });

    // Risposta positiva
    return res.status(200).json({ message: "Email inviata con successo" });
  } catch (error) {
    // Log dell'errore per debugging
    console.error("Errore nell'invio dell'email:", error);
    return res
      .status(500)
      .json({ error: error.message || "Errore nell'invio dell'email" });
  }
}
