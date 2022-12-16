const nodemailer = require("nodemailer");
module.exports = {
  // send message in mail
  sendingMail: async (req, res, next) => {
    try {
      const users = ["sanoopsanu122@gmail.com", "jayacv4@gmail.com"];
      console.log("sending mail");
      const msg = {
        from: "sanoopsasidharan122@gmail.com",
        to: users,
        subject: "nodemailer testing",
        text: "Testing out first sender",
      };
      nodemailer
        .createTransport({
          service: "gmail",
          auth: {
            user: "sanoopsasidharan122@gmail.com",
            pass: "lqnxclwnzptznpxk",
          },
          port: 465,
          host: "smtp.gmail.com",
        })
        .sendMail(msg, (err) => {
          if (err) {
            return console.log("Error occurs", err);
          } else {
            return console.log("Email sent");
          }
        });
    } catch (error) {
      next(error);
    }
  },
};
