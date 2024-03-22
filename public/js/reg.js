const form = document.querySelector('#regForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  if (!inputs.login || !inputs.password) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      console.log('response', result);
      if (result.err) {
        const msg = document.querySelector('.regMsg');
        msg.innerText = result.err;
        msg.style.color = 'black';
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      console.log('Ошибка регистрации=>', error);
      alert('Ошибка регистрации!');
    }
  }
});
