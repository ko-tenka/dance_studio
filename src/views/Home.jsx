const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <h1>Hello world!</h1>
      <a href="/">На главную</a>
      <a href="/news">Создать новость</a>
    </Layout>
  );
};