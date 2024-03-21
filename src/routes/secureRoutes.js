const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Secures = require('../views/Secure');

const { Secure } = require('../../db/models');


router.post('/', async (req, res) => {
  const { pass } = req.body;
  try {
    const user = await Secure.findOne({ where: { pass } });
    if (!user) {
      res.json({ err: 'Такой пользователь не найден!' });
    } else {
      // * создаём сессию <3
      req.session.pass = user.pass;
      req.session.save(() => {
        res.json({ msg: 'Вы успешно авторизованы!' });
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при авторизации!' });
  }
});

module.exports = router;
