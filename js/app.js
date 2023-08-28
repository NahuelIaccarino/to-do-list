const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <input type="color" class="color-picker" onchange="changeColor(this)">
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function completeTask(button) {
  const li = button.parentElement;
  li.classList.toggle("completed");
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector("span");
  const newTaskText = prompt("Edit task:", span.textContent);
  if (newTaskText !== null) {
    span.textContent = newTaskText;
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function changeColor(input) {
  const li = input.parentElement;
  li.style.backgroundColor = input.value;
}