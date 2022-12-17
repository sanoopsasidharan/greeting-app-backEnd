const nodemailer = require("nodemailer");
const User = require("../model/userModel");
require("dotenv").config();

const sendingMail = async () => {
  try {
    User.find()
      .then((res) => {
        const users = res.map((item, index) => {
          return item.email;
        });
        console.log(users);
        console.log("sending mail");
        const msg = {
          from: "sanoopsasidharan122@gmail.com",
          to: users,
          subject: " Morning greeting",
          text: "Hope your morning is relaxing. I just wanted to send a quick message to say I am thinking of you and filling your day with light and love, friend. Cheers to a beautiful new day—have a great one.",
        };
        nodemailer
          .createTransport({
            service: "gmail",
            auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.PASS,
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
      })
      .catch((err) => {
        console.log("no users");
      });
  } catch (error) {
    console.log("somthing problem email not send");
  }
};

module.exports = sendingMail;
