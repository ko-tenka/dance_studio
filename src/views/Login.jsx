const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
   <div className='loginDivConteiner'>
       <h2 className='hTag'>Войдите на сайт</h2>
       <hr />
       <script defer src='/js/login.js' />
       <form action="/login" method="POST" id="loginForm">
        <div><input name="login" type="text" placeholder='Логин' className="form-control shadow rounded" id="exampleInput1" /></div> 
        <div><input name="password" type="password" placeholder='Пароль' className="form-control shadow rounded" id="exampleInput2" /></div> 
         <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
       </form>
       <hr />
       <h3 className='logMsg'>Добро пожаловать!</h3>
       <a href="/" className='loginBack'>Вернуться</a>
       </div>
    </Layout>
  );
};
