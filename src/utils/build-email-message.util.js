const { getMailerInstance } = require("../config/email-transporter.config");
const hbs = require("nodemailer-express-handlebars");
const path = require("path")

// function insertHTMLTemplate({ nodemailerTransport, templateName }) {
//   const filePath = path.join(__dirname, "../templates", templateName);
//   const handlebarOptions = {
//     viewEngine: {
//       partialsDir: filePath,
//       defaultLayout: false,
//     },
//     viewPath: filePath,
//   };
//   nodemailerTransport.use("compile", hbs(handlebarOptions));
// }

async function sendNodemailerEmail({
  to = "",
  subject = "",
  data = {},
  templateName = "",
}) {
  try {
    const nodemailerTransport = getMailerInstance();
    // insertHTMLTemplate({ nodemailerTransport, templateName });
    const info = await nodemailerTransport.sendMail({
      from: "Ticket Management System",
      to,
      subject,
      template: templateName,
      context: data
    });
    console.log("Email sent : %s", info.messageId);
  } catch (error) {
    console.log("error", error);
    throw new Error("failed to send message");
  }
}

module.exports = {
  sendNodemailerEmail,
};
