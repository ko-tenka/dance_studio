const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
    return (
      <Layout>
        <div className='loginDivConteiner'>
        <h2 className='hTag'>Зарегистрируйтесь</h2>
        <script defer src="/js/index.js" />
        <script defer src='/js/reg.js' />
        <form action="/register" method="POST" id="regForm">
        <div><input name="login" placeholder="Логин" type="text" className="form-control shadow rounded" id="exampleInput1" /></div> 
        <div> <input name="password" placeholder="Пароль" type="password" className="form-control shadow rounded" id="exampleInput2" /></div> 
        <div> <input name="email" placeholder="Email" type="email" className="form-control shadow rounded" id="exampleInput3" /></div> 
          <div className='btnTaskDiv'><button type="submit" className="btn btn-primary shadow rounded">Отправить</button></div>
        </form>
        <h3 className='regMsg'>Добро пожаловать!</h3>
        <a href="/" className='loginBack'>Вернуться</a>
        </div>
      </Layout>
    );
  };
  