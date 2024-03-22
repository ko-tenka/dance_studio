const React = require('react');

const Layout = require('./Layout');

module.exports = function Secure({ login }) {
  return (
    <Layout login={ login }>
      <div className='loginDivConteiner'>
      <h2 className='hTag'>Войдите как администратор</h2>
      <script defer src='/js/secure.js' />
      <form action="/secure" method="POST" id="secureForm">
        <label htmlFor="exampleInput1" className="form-label btnTaskDiv">Секретное слово</label>
       <div><input name="pass" type="text" className="form-control shadow rounded" id="exampleInput1" /></div>
        <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
      </form>
      <hr />
      <h3 className='logMsg2'>Добро пожаловать!</h3>
      <a href="/" className='loginBack'>Вернуться</a>
      </div>
    </Layout>
  );
};