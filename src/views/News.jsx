const React = require("react");
const Layout = require('./Layout');
const Newscard = require("./Newscard");

function Users({ data, title }) {
  return (
    <Layout title={title}>
      <script defer src="/js/users.js" />
      <form className="userForm" name='userForm' method="POST" action="/users" style={{ display: 'flex', width: '600px' }}>
        <h1>Введите название</h1>
        <input className="form-control" name="login" placeholder="Название" />
        <h1>Введите новость</h1>
        <input className="form-control" name="password" type="password" placeholder="Новость"/>
        <button className="btn btn-primary">Поделиться</button>
      </form>
      {/* сюда вешаються все обработчики на самый большой див */}
      {/* <div className="users">  
        {data.map((el) => <Newscard key={el.id} login={el.login} id={el.id}/>)}
      </div> */}
    </Layout>
  )
}

module.exports = Users;