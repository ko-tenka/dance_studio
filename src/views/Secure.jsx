const React = require('react');

const Layout = require('./Layout');

module.exports = function Secure({ login }) {
  return (
    <Layout login={ login }>
      <h2 className='hTag'>Войдите как администратор</h2>
      <hr />
      <script defer src='/js/secure.js' />
      <form action="/secure" method="POST" id="secureForm">
        <label htmlFor="exampleInput1" className="form-label">Секретное слово</label>
        <input name="pass" type="text" className="form-control shadow rounded" id="exampleInput1" />
        <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
      </form>
      <hr />
      <h3 className='logMsg2'>Добро пожаловать!</h3>
    </Layout>
  );
};