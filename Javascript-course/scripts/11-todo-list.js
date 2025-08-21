const todoList = [
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
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    // THIS GENERATES THE HTML
    const html = //This ${i, 1} is to delete the index and remove just one value
      `<p>
        ${name} ${dueDate}
        <button onClick="
        todoList.splice(${i}, 1); 
        renderTodoList();
        "> Delete </button> 
      </p>`
    todoListHTML += html
  }
  console.log(todoListHTML)

  document.querySelector('.js-todolist')
    .innerHTML = todoListHTML


}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value

  todoList.push(name)
  document.querySelector('.js-todolist').innerHTML = name
  console.log(todoList)

  inputElement.value = '' // This resets the textbox
  renderTodoList();
}