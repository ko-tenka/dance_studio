const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const Preview = require('../views/Preview')
const Tasks = require('../views/Tasks');


const router = express.Router();


router.get('/news', async (req, res) => {
  const { login } = req.session;
  renderTemplate(Tasks, { login }, res);
});

router.get('/home', (req, res) => {
  const { login } = req.session;
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
