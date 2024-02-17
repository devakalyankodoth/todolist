function fetchTodoList() {
    return new Promise((resolve, reject) => {
      fetch("todo.json")
        .then((response) => response.json())
        .then((data) => {
          displayTodoList(data);
        })
        .catch((error) => console.error("Error :", error));
    });
  }
  
  function displayTodoList(todos) {
    const todoList = document.getElementById("todo");
    todoList.innerHTML = "";
  
    todos.forEach((todo) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = todo.id;
      checkbox.id = `todo-${todo.id}`;
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;
  
      const label = document.createElement("label");
      label.htmlFor = `todo-${todo.id}`;
      label.textContent = todo.title;
  
      const todoItem = document.createElement("div");
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
  
      todoList.appendChild(todoItem);
  
      checkbox.addEventListener("change", () => {
        const checkedOnes = document.querySelectorAll(
          "input:checked:not([disabled])"
        );
        if (checkedOnes.length >= 5 && checkedOnes.length === 5) {
          alert("Congratulations!! 5 Tasks have been Successfully Completed .");
        }
        if (checkedOnes.length > 5 && checkedOnes.length === 6) {
          alert("Oops!! You have already completed 5 tasks!");
          checkbox.checked = false;
        }
      });
    });
  }
  
  fetchTodoList()
    .then((todoList) => renderTodoList(todoList))
    .catch((error) => console.error("Error fetching todo list:", error));
  