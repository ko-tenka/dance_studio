// const btn = document.querySelector('.shopBy');
// const div = document.querySelector('.urna')

// btn.addEventListener('click', async (e) => {
//   try {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random')
//     const tasks = await response.json();
//     const txt = `
//     <h3>${task.title}</h3>
//     <p>${task.description}</p>
//     `;
//     div.innerHTML = txt;
//   } catch (error) {
//     console.log(error);
//   }
// })

// async function loadTasks() {
//   try {
//     const response = await fetch("/api/shop");
//     const tasks = await response.json();

//     const tasksContainer = document.querySelector(".tasksContainer");
//     tasks.forEach((task) => {
//       const taskElement = document.createElement("div");
//       taskElement.className = "taskCard";
//       taskElement.innerHTML = `
//            <h3>${task.title}</h3>
//            <p>${task.description}</p>
//         `;
//       tasksContainer.appendChild(taskElement);
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const btn = document.querySelector(".shopBy");

// btn.addEventListener("click", async (e) => {
//   try {
//     const response = await fetch("/api/shop");
//     const tasks = await response.json();

//     const tasksContainer = document.querySelector(".urna");
//     tasks.forEach((task) => {
//       const taskElement = document.createElement("div");
//       taskElement.className = "taskCard";
//       taskElement.innerHTML = `
//                <h3>${task.title}</h3>
//                <p>${task.description}</p>
//             `;
//       tasksContainer.appendChild(taskElement);
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });



// const products = document.querySelectorAll('.taskCard');
// // Находим див корзины
// const cartTotal = document.querySelector('.urna');

// products.forEach(product => {
//   product.addEventListener('click', () => {
//     // Получаем цену товара из атрибута "data-price"
//     const price = parseFloat(product.getAttribute('data-price'));
//     // Получаем текущую сумму корзины
//     let total = parseFloat(cartTotal.textContent);
//     // Добавляем цену товара к текущей сумме
//     total += price;
//     // Обновляем отображение суммы корзины
//     cartTotal.textContent = total.toFixed(2); // Округляем до двух знаков после запятой
//   });
// });



// Находим все дивы с классом "product"
const products = document.querySelectorAll('.taskCard');
// Находим див корзины
const cartTotal = document.getElementById('.urna');


products.forEach(product => {
  product.addEventListener('click', () => {
    const description = product.textContent;
    const priceRegex = /Цена: \$([0-9.]+)/;
    const match = description.match(priceRegex);
    if (match) {
      const price = parseFloat(match[1]);
      let total = parseFloat(cartTotal.textContent);
      total += price;
      cartTotal.textContent = total.toFixed(2);
    } else {
      console.log('Цена не найдена в описании товара');
    }
  });
});
// мне нужна табличка в бд с корзиной ссылающаяся на юзера или поле в юзере