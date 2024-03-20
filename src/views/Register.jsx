const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
    return (
      <Layout>
        <h2>Зарегистрируйтесь</h2>
        <hr />
        <script defer src="/js/index.js" />
        <script defer src='/js/reg.js' />
        <form action="/register" method="POST" id="regForm">
          <label htmlFor="exampleInput1" className="form-label">Login</label>
          <input name="login" type="text" className="form-control shadow rounded" id="exampleInput1" />
          <label htmlFor="exampleInput2" className="form-label">Password</label>
          <input name="password" type="password" className="form-control shadow rounded" id="exampleInput2" />
          <label htmlFor="exampleInput3" className="form-label">Email</label>
          <input name="email" type="email" className="form-control shadow rounded" id="exampleInput3" />
          <button type="submit" className="btn btn-primary shadow rounded">Отправить</button>
        </form>
        <hr />
        <h3 className='regMsg'>Добро подаловать!</h3>
      </Layout>
    );
  };
  