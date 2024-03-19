const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;
