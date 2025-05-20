const todolist = [];
const divele = document.querySelector('.display-todoValue');
function rendorTodo(){
    let todolisthtml = '';
    for(let i=0;i<todolist.length;i++){
        const todo = todolist[i];
        const html = `
        <p>
            ${todo} 
            <button onclick="
                todolist.splice(${i},1);
                rendorTodo();
            ">Delete</button>
        </p>`
        todolisthtml += html;
    }
    const divele = document.querySelector('.display-todoValue');
    divele.innerHTML = todolisthtml;
}
const input = document.querySelector('.js-input');
function addTodo(){
    const val = input.value;
    todolist.push(val);
    console.log(todolist);
    input.value = '';
    rendorTodo();
}