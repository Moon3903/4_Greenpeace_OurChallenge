const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.list');

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",clickInList);

function addTodo(event){
    
    //prevent refresh submit button
    event.preventDefault();
    console.log("hell");
    if(todoInput.value == ""){
        return;
    }
    //to create element
    const todoDiv = document.createElement("div");
    //add class
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    //take input
    newTodo.innerText = todoInput.value;
    console.log(todoInput.value);
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash");
    todoDiv.appendChild(trashButton);

    //to list
    todoList.appendChild(todoDiv);

    //clear form
    todoInput.value = "";

}

function clickInList(e){
    const item = e.target;
    // e.preventDefault();
    //del
    if(item.classList[0] === "trash"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
        // item.parentElement.remove();  
    }

    if(item.classList[0] === "btn"){
        item.parentElement.classList.toggle("completed");
    }
}