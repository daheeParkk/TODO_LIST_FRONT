const checkBtn = document.querySelector("#todo-check-btn");
const todoContents = document.querySelector(".todo-contents");
const todoTitle = document.querySelector(".todo-title");
const todoList = document.querySelector(".todo");

function deleteLine() {
    if(todoContents.style.textDecoration === '') {
        todoContents.style.textDecoration = 'line-through';
    } else {
        todoContents.style.textDecoration = '';
    } 
}

let checkBigTodo = false;

function openTodoList() {
    if (!checkBigTodo) {
        const bigTodoList = todoList.cloneNode(true);
        todoList.after(bigTodoList);
        bigTodoList.style.width = '25vw';
        bigTodoList.style.height = '50vh';
        bigTodoList.style.margin = 'auto';
        bigTodoList.style.marginTop = 'auto';
        bigTodoList.style.position = 'absolute';

        checkBigTodo = true;
    }
}

checkBtn.addEventListener('click', deleteLine);
todoTitle.addEventListener('click', openTodoList);
