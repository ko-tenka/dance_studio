const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className='loginDivConteiner'>
        <img src="/assets/IMG_4555.JPG" className='catAdmin' alt="Это кот" />
      <h1 className='homeTitle'>Привет администратор!</h1>
      <div className='aHomeDiv'><a className='aBackHome' href="/">На главную</a></div>
      <div className='aHomeDiv'><a className='aBackHome' href="/news">Создать новость</a></div>
      </div>
    </Layout>
  );
};