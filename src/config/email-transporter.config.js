const nodeMailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path")

let _nodeMailerInstance = null;

function initiateTemplateEngine({ nodeMailerTransporter }){
  const handlebarOptions = {
    viewEngine: {
      defaultLayout: false,
    },
    viewPath: path.join(__dirname,"../templates"),
  };
  nodeMailerTransporter.use("compile",hbs(handlebarOptions))
}

function initiateNodemailerInstance() {
  _nodeMailerInstance = nodeMailer.createTransport({
     service: process.env.NODE_MAILER_SERVICE,
    host: process.env.NODE_MAILER_HOST,
    port: process.env.NODE_MAILER_PORT,
    secure: false,
    auth: {
      user: process.env.NODE_MAILER_AUTH_USERNAME,
      pass: process.env.NODE_MAILER_AUTH_PASSWORD,
    },
  });
  initiateTemplateEngine({ nodeMailerTransporter: _nodeMailerInstance })
}

function getMailerInstance({ isNodeMailer = true } = {}) {
  if (isNodeMailer) {
    return _nodeMailerInstance;
  }
}

module.exports = {
  initiateNodemailerInstance,
  getMailerInstance,
};
