var ul = document.getElementById("wel");
var input = document.getElementById("in");

function addTask() {
    var taskText = input.value.trim();  // Trim spaces from the input

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskText + " <button onclick='removeTask(event)'>delete</button>";
    ul.appendChild(li);
    input.value = '';  // Clear the input after adding the task
}

function removeTask(event) {
    event.target.parentElement.remove();
}
