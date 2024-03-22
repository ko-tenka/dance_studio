const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const Preview = require('../views/Preview')
const Tasks = require('../views/Tasks');
const Secure = require('../views/Secure')

const { secureRout, checkUser } =require('../middlewares/common')
const router = express.Router();

router.get('/secure', async (req, res) => {
  const { login } = req.session;
  renderTemplate(Secure, { login }, res);
});

router.get('/news', async (req, res) => {
  const { login } = req.session;
  renderTemplate(Tasks, { login }, res);
});

router.get('/home', checkUser, (req, res) => {
  const { login } = req.session;
  console.log(login)
  renderTemplate(Home, { login }, res);
});

router.get('/logout', (req, res) => {
  // * Уничтонить сессию и куку
  req.session.destroy(() => {
    res.clearCookie('LeopardsCookie');
    res.redirect('/');
  });
});

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Preview, {login}, res);
});

module.exports = router;
