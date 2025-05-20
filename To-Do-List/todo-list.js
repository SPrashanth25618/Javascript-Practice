const todolist = [{
    name:'wash clothes',
    dueDate : '19-12-2022'
}];
const divele = document.querySelector('.display-todoValue');
function rendorTodo(){
    let todolisthtml = '';
    for(let i=0;i<todolist.length;i++){
        const todo = todolist[i];
        const {name,dueDate} = todo;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todolist.splice(${i},1);
            rendorTodo();
        " class="delete-btn">Delete</button>
        `
        todolisthtml += html;
    }
    const divele = document.querySelector('.display-todoValue');
    divele.innerHTML = todolisthtml;
    
}
function addTodo(){
    const input = document.querySelector('.js-input');
    const dueDate_input = document.querySelector('.js-dueDate-input');
    const name = input.value;
    const dueDate = dueDate_input.value;
    todolist.push({name,dueDate
    });
    input.value = '';
    rendorTodo();
}