const form = document.querySelector('#loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  if (!inputs.login || !inputs.password) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      console.log('result:', result);
      const msg = document.querySelector('.logMsg');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        // msg.innerText = result.msg;
        // msg.style.color = 'green';
        form.remove();
        const h2 = document.querySelector('.hTag');
        h2.remove();
        const hr = document.querySelector('hr')
        hr.remove();
        const nav = document.querySelector('#navbarNav');
        const newHead = `
        <ul class="navbar-nav">
        <li class="new-item">
        <a class="nav-link" href="/home">Моя страница</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            Hi, ${inputs.login}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout">Logout</a>
        </li>
      </ul>
        `
        nav.innerHTML = newHead;
        // * если хотим изменить url
        // window.history.pushState(null, null, '/') - создает новую страничку
        window.location.href = '/';
      }
    } catch (error) {
      console.log('Ошибка авторизации=>', error);
      alert('Ошибка авторизации!');
    }
  }
});
