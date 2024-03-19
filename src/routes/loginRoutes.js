const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      res.json({ err: 'Такой пользователь не найден!' });
    } else {
      // * сравнение паролей, compare возвращает true/false
      const checkPass = await bcrypt.compare(password, user.password);
      if (!checkPass) {
        res.json({ err: 'Неверный пароль!' });
      } else {
        // * создаём сессию <3
        req.session.login = user.login;
        req.session.save(() => {
          res.json({ msg: 'Вы успешно авторизованы!' });
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при авторизации!' });
  }
});

module.exports = router;
