const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// routers
const uploadRouter = require("./routes/upload");

// port config
server.listen(8000);
console.log("Express server started on port %s", server.address().port);

// routes setup
app.use("/upload", uploadRouter);

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/img", express.static(path.join(__dirname, "public/images")));
app.use(router);
app.use(express.json());
global.appRoot = path.resolve(__dirname);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
