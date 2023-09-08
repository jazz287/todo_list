let tasks = [];
function addTodo() {
    let todo = prompt("Add an item");
    if (todo !== null) {
        tasks.push(todo);
        displayTodos();
    }
}



function displayTodos() {
    // select the correct html element
    let ul = document.querySelector("ul");
    ul.innerHTML = " " ;
    for (let i = 0; i < tasks.length; i++) {
        let currentTodo = tasks[i];
        // create a new li element
        let li = document.createElement("li");
        // set the content of the new li element
        li.innerHTML = currentTodo ;
        // append the new li to the correct html element
        ul.appendChild(li);
    }
    
}