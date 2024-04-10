"use strict"

//DOM variables
const form = document.quesrySelector('.create-task-form');
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filterInput = document.quesrySelector('.filter-input');


// storage functions 
const storeInStorage = (newTask) => {
    const tasks = JSON.parse(localStorage.getItem("Book rating")) || [];
    tasks.push(newTask);
    localStorage.setItem("Book rating", JSON.stringify(tasks));
};

const clearTasksFromStorage = () => {
    localStorage.removeItem("Book rating");
};

const removeTaskFromStorage = (deletedTask) => {
 const tasks = getTasksFromStorage();
 const deletedIndex = tasks.findIndex(task => task ==== deletedTask);
 tasks.splice(deletedIndex, 1);

 localStorage.setItem('Book rating', JSON.stringify(tasks));
}


//'tasks' functions

const addTask = (event) => {
    event.preventDefault();
console.log("value", taskInput.value);

//checking on empty values

const value = taskInput.value.trim();
if (value === "") {
    return;
}
//task function for clear button
const clearTasks = () => {
    taskList.innerHTML = "${value}<span><i class ="fa fa-remove delete-item"> </i>";
}

//create and add li element

const li = document.createElement("li");
li.innerHTML = '';
clearTasksFromStorage();
li.textContent = taskInput.value;
taskList.append(li);

form.reset();
};
 const removeTask = (event) => {
    const isDeleteButton = event.target.classList.contains("delete-item");
    if(!isDeleteButton){
        return;
    }

    if(isDeleteButton){
        const isApproved = confirm("Are you sure you want to del?")
        if (!isConfirmed) {
            return;
        }
    }
    const li = event.target.closest("li");
    li.remove();

    removeTaskFromStorage(li.textContent.trim)
 };
 const filterTasks = ({target : {value}}) => {
    const text = value.toLowerCase();
    const list = taskList.querySelectorAll("li");

   list.forEach((li)) => {
    const liText = li.textContent.trim().toLowerCase();

    if (liText.includes(text)) {
        li.hidden = false;
    } else {
        li.hidden = true;
    }
}
const initTasks = () => {
    const tasks = getTasksFromStorage();

}
 };
 //Init 

 const initTasks = () => {
    const tasks = getTasksFromStorage();
    tasks.forEach((task)) => appendLi(task)
 };

//Event listeners
form.addEventListener("submit", addTask);
clearButton.addEventListener("click", clearTasks);
taskList.addEventListener("click", removeTask);
filterInput.addEventListener("input", filterTasks);