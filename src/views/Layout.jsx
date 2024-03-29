const React = require('react');

module.exports = function Layout({ children, login }) {
  return (
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://api-maps.yandex.ru/2.1/?apikey=9940113b-b6d1-421c-a4f1-a2bb67967000&lang=en_US" type="text/javascript"></script>
        {/* <link type="image/x-icon" href="/assets/favicon.ico" rel="shortcut icon" /> */}
        <script src="https://api-maps.yandex.ru/2.1/?apikey=9940113b-b6d1-421c-a4f1-a2bb67967000&lang=en_US" type="text/javascript"></script>
        <link rel="stylesheet" href="/css/style.css" />
        <title>Cookie</title>
      </head>
      <header className="shadow">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              {login ? (
                <ul className="navbar-nav">
                  <li className="nav-item" ><a className="nav-link" href="/secure">Админ</a></li>
                  <li className="nav-item" ><a className="nav-link" href="/room">Моя страница</a></li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Hi, {login}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout</a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" id="aLog1"href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Registration</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </header>
      <body id='content'>
        { children }
      </body>
    </html>
  )}