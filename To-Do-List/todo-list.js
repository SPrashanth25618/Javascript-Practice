const todolist = [];
const input = document.querySelector('.js-input');
function addTodo(){
    const val = input.value;
    todolist.push(val);
    console.log(todolist);
    input.value = '';
}