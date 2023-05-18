const form = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

//
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
  const mytodoText = input.value.trim();
  if (mytodoText.length) {
    const todoItem = createTodoItem(mytodoText);
    todoList.appendChild(todoItem);
    input.value = '';
  }
})  

function createTodoItem(text) {
    // Creating new HTML elements
    const li = document.createElement('li');
    const span = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
  
    // Adding child elements to the parent element
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
  
    // Setting the content of the child elements
    span.textContent = text;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';
  
    // Adding event listeners to the delete and edit buttons
    deleteButton.addEventListener('click', function() {
      li.remove();
    });
  
    editButton.addEventListener('click', function() {
      li.classList.add('editing');
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      span.replaceWith(input);
      input.focus();
  
      input.addEventListener('blur', function() {
        const mytodoText = input.value.trim();
        if (mytodoText.length) {
          span.textContent = mytodoText;
          li.classList.remove('editing');
        } else {
          li.remove();
        }
      });
    });
  
    // Returning the new list item element
    return li;
  }


  
  

