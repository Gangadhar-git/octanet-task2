
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var newTask = document.createElement("li");
      newTask.innerHTML = `<span>${taskInput.value}</span>
                            <button onclick="editTask(this)">Edit</button>
                            <button onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  // Function to delete a task
  function deleteTask(btn) {
    var taskItem = btn.parentElement;
    taskItem.remove();
  }

  function editTask(btn) {
    var taskItem = btn.parentElement;
    var taskText = taskItem.querySelector("span").textContent;
    var editedTask = prompt("Edit the task:", taskText);
  
    if (editedTask !== null && editedTask.trim() !== "") {
      taskItem.querySelector("span").textContent = editedTask;
    }
  }
  