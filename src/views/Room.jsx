const React = require('react');

const Layout = require('./Layout');

module.exports = function Room({ login }) {
  return (
    <Layout login={login}>
      <h1>Hello world!</h1>
      <a href="/">На главную</a>
      <div className='urna'></div>
    </Layout>
  );
};