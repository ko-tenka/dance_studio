const React = require('react');
const Layout = require('./Layout');

module.exports = function Shop({ login }) {
  return (
    <Layout login={login}>
      <div className='mainContainer'>
        <h1>Добавить товар</h1>

        <form className='addTaskForm2'>
          <input type='text' name='title' placeholder='Title' required />
          <input
            type='text'
            name='description'
            placeholder='Description'
            required
          />
          <button type='submit'>Добавить</button>
        </form>


        <a href="/home">Вернуться</a>
        <div className='tasksContainer4'></div>
      </div>
      <script defer src='/js/shop.js' />
    </Layout>
  );
}
//сырое