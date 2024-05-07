// import {NextResponse} from "next/server"
import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  // Variables
  const { name, email, subject, message } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // Transformer les retours à la ligne pour le HTML
//   const content = message.replace(/\n/g, "<br>").replace(/\r/g, "<br>").replace(/\t/g, "<br>").replace(/<(?!br\s*\/?)[^>]+>/g, ""); 

  try {
    // Création du message
    const sendGridMail = {
      to: "motouomaureline@gmail.com",
      from: "motouomaureline@gmail.com",
      templateId: "d-c226b57ead43459ea4a28b671e96aeae",
      dynamic_template_data: {
        fullname: name,
        email: email,
        message: message
      }
    };
    await sgMail.send(sendGridMail);
    res.status(200).json({
      message: "Message envoyé"
    });
  } catch (e) {
    res.status(400).json(e);
  }

  //   try{

  //     const { data } = await resend.emails.send({
  //         from: 'Acme <motouomaureline@gmail.com>',
  //         to: email,
  //         subject: "KEI",
  //         html: '<strong>{message}</strong>',
  //       });
  //       res.status(200).json(data);

  //     // return NextResponse.json({message : "Votre message a été envoyé"})

  //   }catch(e){
  //      res.status(400).json(e);
  //   }
}
