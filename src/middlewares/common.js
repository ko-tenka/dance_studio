// * На главную попадаем ЕСЛИ пользователь ЕСТЬ
// * Если нет, то на логин ИЛИ регистрацию

function secureRout(req, res, next) {
  if (!req.session.login) {
    next();
  } else {
    res.redirect("/home");
  }
}

function checkUser(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = { secureRout, checkUser };
