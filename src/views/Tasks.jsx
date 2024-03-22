const React = require('react');
const Layout = require('./Layout');

module.exports = function Tasks({login}) {
  return (
    <Layout login={login}>
      <div className='mainContainer'>
        <h1 className='tasksTxt1'>Добавить новость</h1>

        <form className='addTaskForm'>
          <input type='text' className='inpTask1' name='title' placeholder='Title' required />
          <input
            className='inpTask1'
            type='text'
            name='description'
            placeholder='Description'
            required
          />
          <button className='btnTask1' type='submit'>Add Task</button>
        </form>

        <div className='tasksContainer'></div>
        <div><a href="/home" className='aBackHome' >Вернуться</a></div>
      </div>
      <script defer src='/js/tasks.js' />
    </Layout>
  );
}
