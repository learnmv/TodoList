let ctr = 1;
function deleteTodo(index) {
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}
function addTodo() {
  const value = document.querySelector("input").value;
  const divEl = document.createElement("div");
  const spanEl = document.createElement("span");
  const buttonEl = document.createElement("button");
  spanEl.innerHTML = value;
  buttonEl.innerHTML = "Delete";
  buttonEl.onclick = function () {
    deleteTodo(divEl.id);
  };

  divEl.appendChild(spanEl);
  divEl.appendChild(buttonEl);
  divEl.id = ctr;
  document.querySelector("body").appendChild(divEl);
  ctr += 1;
  document.querySelector("input").value = "";
}
