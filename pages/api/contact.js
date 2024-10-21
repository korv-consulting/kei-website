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
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px; background-color: #fff;">
            <div style="text-align: center;">
              <img src="https://fr.freepik.com/vecteurs-libre/conception-logo-ac-design-plat_28542127.htm#fromView=search&page=1&position=1&uuid=c16baefe-f565-41d6-9758-683f2c986acb" alt="Logo KEI" style="max-width: 150px; height: auto; margin-bottom: 20px;" />
            </div>
            <div style="padding: 10px; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">
              <p style="margin: 0 0 10px 0;"><strong>Nom:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0;"><strong>Message:</strong><br/>${message}</p>
            </div>
          </div>
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
