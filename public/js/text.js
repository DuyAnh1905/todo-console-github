var tasks = [];

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();
    var startDate = startDateInput.value;
    var endDate = endDateInput.value;

    if (taskText !== "" && startDate !== "" && endDate !== "") {
        var task = {
            
  
name: taskText,
            start: startDate,
            end: endDate
        };

        tasks.push(task);

        // Update the task list
        updateTaskList(taskList);

        

      
// Clear the input fields
        taskInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
    } else {
        alert("Please enter task details!");
    }
}

function removeTask(index) {
    tasks.splice(index, 1);

    // Update the task list
    var taskList = document.getElementById("taskList");
    updateTaskList(taskList);
}

function updateTaskList(taskList) {
    // Clear the current list
    taskList.innerHTML = "";

    // Populate the list with tasks
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.textContent = tasks[i].name + " (Start: " + tasks[i].start + ", End: " + tasks[i].end + ")";

        // Add a remove button for each task
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = (function(index) {
            return function() {
                removeTask(index);
            };
        })(i);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
}