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
    <div className='probClass'>
        <h2 className='probClassTxt1'>Школа танцев в Москве Maze Dance Company</h2>
        <h3 className='probClassTxt2'>Попробуй себя в танцах!</h3>
        <h3 className='probClassTxt3'>Приходи на бесплатное первое занятие!</h3>
    </div>
    <div className='oStudii'>
      <h3 className='oStudiiTxt1'>Maze Dance Company - классный порект</h3>
      <h3 className='oStudiiTxt2'>Мы обучаем детей и взрослых современным направлениям танцев.</h3>
      <h3 className='oStudiiTxt3'>Наши педагоги и амбассадоры - яркие и самобытные представители современной танцевальной культуры</h3>
    </div>
    <div className='newScholl'>
      <h1 className='newSchollTxt1'>Новости студии</h1>
    </div>
    </Layout>
  );
};
