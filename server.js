require("dotenv").config();
require("@babel/register");

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dbConnectionCheck = require("./db/dbConnectCheck");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { secureRout, checkUser } = require('./src/middlewares/common');


const { PORT } = process.env;

const app = express();
dbConnectionCheck();

const Previw = require('./src/views/Preview')
const indexRoutes = require('./src/routes/indexRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const regRoutes = require('./src/routes/regRoutes');
const renderTemplate = require("./src/lib/renderTemplate");


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

app.get('/', (req, res)=>{
  renderTemplate(Previw, {}, res)
})
app.use('/login', secureRout, loginRoutes);
app.use('/register', secureRout, regRoutes);
app.use('/', checkUser, indexRoutes);

app.listen(PORT ?? 3100, () => {
  console.log("Сервер запущен!");
});

app.get("/*", (req, res) => {
  setTimeout(() => {
    res.redirect("/");
  }, 500);
});

// Остановилась на том, что работает логин и пароль. 
// Вход на выход и пишет Hi,user
// Регистрация проходит в бд пишет
// Не переходит на Home 
// Не выводит сообщение здесь о успешной  авторизации зеленого цвета