const React = require('react');
const Layout = require('./Layout');

module.exports = function Tasks() {
  return (
    <Layout>
      <div className='mainContainer'>
        <h1>Добавить новость</h1>

        <form className='addTaskForm'>
          <input type='text' name='title' placeholder='Title' required />
          <input
            type='text'
            name='description'
            placeholder='Description'
            required
          />
          <button type='submit'>Add Task</button>
        </form>

        <div className='tasksContainer'></div>
      </div>
      
    </Layout>
  );
}
