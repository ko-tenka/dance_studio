const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h2 className='hTag'>Войдите на сайт</h2>
      <hr />
      <script defer src='/js/login.js' />
      <form action="/login" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Login</label>
        <input name="login" type="text" className="form-control shadow rounded" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control shadow rounded" id="exampleInput2" />
        <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
      </form>
      <hr />
      <h3 className='logMsg'>Здесь будет ваше сообщение</h3>
    </Layout>
  );
};
