const login = document.getElementById("aLog1")
const content = document.getElementById("content")


login.getElementById("aLog1").addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке

  fetch("/login") // Загружаем содержимое страницы Login.ajax
    .then((response) => response.text()) // Преобразуем ответ в текст
    .then((data) => {
        content.innerHTML = data; // Вставляем содержимое страницы в элемент с id "content"
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
