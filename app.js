/** @format */

const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const { port } = require("./config");

const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).send("hello world!")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
