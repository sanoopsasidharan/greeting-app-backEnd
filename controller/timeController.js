const sendingMail = require("./mailController");

const timer = () => {
  setInterval(() => {
    var DateTime = new Date().toLocaleString(undefined, {
      timeZone: "Asia/Kolkata",
    });
    const currntTime = DateTime.split(" ").pop();

    if (currntTime === "06:00:00") {
      sendingMail();
      console.log("====================================");
      console.log("thime end");
      console.log("====================================");
    }
    // console.log(currntTime);
  }, 1000);
};

module.exports = timer;
