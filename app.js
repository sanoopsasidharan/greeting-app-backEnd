var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const createError = require("http-errors");
var logger = require("morgan");

// config dotenv file
require("dotenv").config();
// connecting mongodb
require("./config/connection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);

setInterval(() => {
  var DateTime = new Date().toLocaleString(undefined, {
    timeZone: "Asia/Kolkata",
  });
  const currntTime = DateTime.split(" ").pop();

  if (currntTime === "12:30:00") {
    console.log("====================================");
    console.log("thime end");
    console.log("====================================");
  }
  console.log(currntTime);
}, 500000);

// throw error
app.use((req, res, next) => next(createError.NotFound()));

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
