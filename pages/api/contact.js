import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false
  }
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
      pass: password
    }
  });

  const form = formidable({});

  form.parse(req, async function (err, fields, files) {
    const name = fields.name[0];
    const email = fields.email[0];
    const message = fields.message[0];
    const content = message
      .replace(/\n/g, "<br>")
      .replace(/\r/g, "<br>")
      .replace(/\t/g, "<br>")
      .replace(/<(?!br\s*\/?)[^>]+>/g, "");
    // <p>Name: ${name} </p>
    // <p>Email: ${email} </p>

    if ( !email || !message) {
        res.status(400).json({ message: "Veuillez renseigner les champs" });
        return;
      }
    
      // Syntaxe adresse email
      const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(email)) {
        res.status(400).send({
          message: "EMAIL Invalide"
        });
    }

    try {
      const mail = await transporter.sendMail({
        from: email,
        to: "christophedanson90@gmail.com ",
        replyTo: myEmail,
        subject: `KEI`,
        html: `
            <p>${content} </p>
            `
      });
      res.status(200).json({
        message: "Message envoyé"
      });
    } catch (e) {
      console.log("==========================error****", e.message);
      res.status(400).json({message : e.message});
    }
  });

 
}
