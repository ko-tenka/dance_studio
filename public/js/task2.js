async function loadTasks() {
  try {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();

    const tasksContainer = document.querySelector('.tasksContainer');
    tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'taskCard';
      taskElement.innerHTML = `
      <img src="/assets/dance.webp" class='photoCard' alt="Фото" />
		 <h3>${task.title}</h3>
		 <p>${task.description}</p>
	  `;
      tasksContainer.appendChild(taskElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadTasks);