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

  todoList.forEach((todoObject, index) => {
      const {name, dueDate} = todoObject
      // THIS GENERATES THE HTML
      const html = //This ${i, 1} is to delete the index and remove just one value
        `<div>${name}</div>
          <div>${dueDate}</div>
          <button class="deleteButton js-deleteButton"
          "> Delete </button> 
        </div>`
      todoListHTML += html
  });

  document.querySelector('.js-todolist')
    .innerHTML = todoListHTML;
    document.querySelectorAll('.js-deleteButton') // 'forEach' tends to return 2 values: 1, the element(the value of that element). 2, the index of the element.

    // So what we are doing here is using arrow function and passing 2 parameters to save those two return values from 'forEach' so we can manipulate them.
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', ()=> {
          todoList.splice(index, 1);
          renderTodoList();
          saveTodo();
        })
      });


}


document.querySelector('.js-addbutton').addEventListener('click', ()=>{
  addTodo();
})

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




