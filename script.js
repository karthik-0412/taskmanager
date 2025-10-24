function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  taskList.appendChild(li);
  input.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
