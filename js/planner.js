const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", addTask);

function addTask() {
	const taskTest = taskInput.value.trim();

	if (taskTest === "") {
		alert("Please enter a task");

		return;
	}

	tasks.push(taskTest);

	displayTasks();

	taskInput.value = "";
}

function displayTasks() {
	taskList.innerHTML = "";

	tasks.forEach(function(task,index){

		const li = document.createElement("li");

		li.innerHTML = `
			<span>${task}</span>

			<button onclick="completeTask(this)">Complete</button>

			<button onclick="deleteTask(${index})">Delete</button>
		`;

		taskList.appendChild(li);
	});
}

function completeTask(button){

	const taskTest = button.parentElement.querySelector("span");

	taskTest.style.textDecoration = "line-through";
}

function deleteTask(index){
	
	tasks.splice(index, 1);

	displayTasks();
}