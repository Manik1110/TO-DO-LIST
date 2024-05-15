function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <div class="checkbox-container">
                <input type="checkbox" class="checkbox" onchange="toggleTask(this)">
                <span>${taskInput.value}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

function deleteTask(button) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
