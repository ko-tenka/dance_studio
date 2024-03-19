const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: 'Такой пользователь уже существует!' });
    } else {
      // * Хэшируем пароли при регистрации
      const hash = await bcrypt.hash(password, 10);
      console.log('hash:', hash);
      const newUser = await User.create({ login, password: hash });
      // * создаём сессию
      // ! req.session появляется если подключили app.use(session(sessionConfig));
      // ! req.session.id - невозможно создать
      req.session.login = newUser.login;
      console.log(req.session);
      // console.log('Новый юзер', newUser);
      // * чтобы не было ошибки [session-file-store] will retry, error on last attempt,
      // * Делай save файла сессий
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован!' });
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;