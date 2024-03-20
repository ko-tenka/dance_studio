const React = require('react');

const Layout = require('./Layout');

module.exports = function Preview({login}) {
  return (
    <Layout login={login}>
        <div className='glavnayaSFotoTXTDiv'>
        <h1 className='glavnayaSFotoTXT1'>"Ритм в сердце, грация в движениях: танцуй свою историю с нами!"</h1>
        </div>
    <div className='glavnayaSFoto'>
    </div>
    </Layout>
  );
};
