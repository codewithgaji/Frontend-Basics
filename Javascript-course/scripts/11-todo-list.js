let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
  name: 'Make dinner',
  dueDate: '2025-08-21'},

  {name: 'Wash Dishes',
  dueDate: '2025-08-21'}
];
renderTodoList();


function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i<todoList.length; i += 1){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject
    // THIS GENERATES THE HTML
    const html = //This ${i, 1} is to delete the index and remove just one value
      `<div>${name}</div>
        <div>${dueDate}</div>
        <button class="deleteButton" onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveTodo();
        "> Delete </button> 
      </div>`
    todoListHTML += html
    
  }

  document.querySelector('.js-todolist')
    .innerHTML = todoListHTML


}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input')
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value
  const name = inputElement.value

  todoList.push({
    name,
    dueDate
  })
  saveTodo()
  inputElement.value = '' // This resets the textbox
  dateInputElement.value = '';
  renderTodoList();
}



function saveTodo(){
  localStorage.setItem('todoList', JSON.stringify(todoList))
}




