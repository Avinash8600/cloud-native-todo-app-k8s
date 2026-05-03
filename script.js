const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// 🔐 Get logged-in user
const user = localStorage.getItem("user");

// 🧠 Unique key per user
const taskKey = "tasks_" + user;

// 📥 Load tasks for this user only
let tasks = JSON.parse(localStorage.getItem(taskKey)) || [];

// 🔄 Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <span onclick="deleteTask(${index})">✖</span>
    `;
    taskList.appendChild(li);
  });
}

// ➕ Add task
function addTask() {
  if (taskInput.value.trim() === "") return;

  tasks.push(taskInput.value);

  localStorage.setItem(taskKey, JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks();
}

// ❌ Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem(taskKey, JSON.stringify(tasks));
  renderTasks();
}

// 🚪 Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// 🚀 Initial load
renderTasks();