let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function delFirst() {
  todos.splice(0, 1);
  render();
}

function delLast() {
  todos.splice(todos.length - 1, 1);
  render();
}

function addTodoComponent(todo) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.innerHTML = todo.title;
  div.appendChild(span);
  document.querySelector("input").value = "";
  return div;
}
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = addTodoComponent(todos[i]);
    document.querySelector("#todos").appendChild(element);
  }
}
