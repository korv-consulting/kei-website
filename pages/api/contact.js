import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  const username = process.env.MAIL_USERNAME;
  const password = process.env.MAIL_PASSWORD;
  const myEmail = process.env.MAIL_FROM_ADDRESS;
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  const form = formidable({});

  form.parse(req, async function (err, fields, files) {
    if (err) {
      res.status(500).json({ message: "Error parsing the form" });
      return;
    }

    const name = fields.name[0];
    const email = fields.email[0];
    const message = fields.message[0];

    if (!email || !message) {
      res.status(400).json({ message: "Veuillez renseigner les champs" });
      return;
    }

    // Syntaxe adresse email
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
      res.status(400).send({
        message: "EMAIL Invalide",
      });
      return;
    }

    // Lire le fichier HTML
    const templatePath = path.resolve('./emailTemplate.html');
    let htmlContent = fs.readFileSync(templatePath, 'utf8');

    // Remplacer les variables dans le contenu HTML
    htmlContent = htmlContent.replace('{{name}}', name);
    htmlContent = htmlContent.replace('{{email}}', email);
    htmlContent = htmlContent.replace('{{message}}', message.replace(/\n/g, "<br>").replace(/\r/g, "<br>").replace(/\t/g, "<br>").replace(/<(?!br\s*\/?)[^>]+>/g, ""));

    try {
      const mail = await transporter.sendMail({
        from: myEmail,  // Changed from 'email' to 'myEmail' to avoid sending from user email
        to: "christophedanson90@gmail.com",
        replyTo: email,  // Set replyTo to the user's email
        subject: `KEI`,
        html: htmlContent,
      });
      res.status(200).json({
        message: "Message envoyé",
      });
    } catch (e) {
      console.log("==========================error****", e.message);
      res.status(400).json({ message: e.message });
    }
  });
}