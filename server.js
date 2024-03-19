require("dotenv").config();
require("@babel/register");

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dbConnectionCheck = require("./db/dbConnectCheck");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

// ____________________ Этого нет в коде с лекции
const Register = require("./src/views/Register");
const Home = require("./src/views/Home");
const Login = require("./src/views/Login");
const renderTemplate = require("./src/lib/renderTemplate");
// _______________________

const { PORT } = process.env;

const app = express();
dbConnectionCheck();

const sessionConfig = {
  name: "NameCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use(session(sessionConfig));

// ______________________  Этого нет в коде с лекции

app.get("/", (req, res) => {
  // console.log(app.locals);
  renderTemplate(Home, {}, res);
});

app.get("/log", (req, res) => {
  // console.log(app.locals);
  renderTemplate(Login, {}, res);
});

app.get("/reg", (req, res) => {
  // console.log(app.locals);
  renderTemplate(Register, {}, res);
});
// ______________________

app.listen(PORT ?? 3100, () => {
  console.log("Сервер запущен!");
});

app.get("/*", (req, res) => {
  setTimeout(() => {
    res.redirect("/");
  }, 500);
});

//Сервер запущен на минималках. Бд есть.
