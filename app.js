const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");

require("./middlewares/server")(app); /* Express-Apollo Server Middleware */
require("./middlewares/db")(); /* MongoDB Middleware */

/* <Declaration of Routes> */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
/* </ Declaration of Routes> */

/* <App Configs> */
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

/* </ App Configs> */

/* <Routes that App uses> */
app.use("/", indexRouter);
app.use("/users", usersRouter);
/* </ Routes that app uses> */

module.exports = app;
