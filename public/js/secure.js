const form = document.querySelector('#secureForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  console.log(inputs.pass)
  if (!inputs.pass) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/secure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      console.log('result:', result);
      const msg = document.querySelector('.logMsg2');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        // msg.innerText = result.msg;
        // msg.style.color = 'green';
        form.remove();
        const h2 = document.querySelector('.hTag');
        h2.remove();
        const hr = document.querySelector('hr');
        hr.remove();
        const nav = document.querySelector('#navbarNav');
        const newHead = `
            Hi, admin
        `;
        nav.innerHTML = newHead;
        // * если хотим изменить url
        // window.history.pushState(null, null, '/') - создае
        window.location.href = '/home';
      }
    } catch (error) {
      console.log('Ошибка авторизации=>', error);
      alert('Ошибка авторизации!');
    }
  }
});
