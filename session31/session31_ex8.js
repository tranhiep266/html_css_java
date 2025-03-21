let todoList = [
  { id: 1, task: "Hit the gym", completed: false },
  { id: 2, task: "Pay bills", completed: true },
  { id: 3, task: "Meet George", completed: false },
  { id: 4, task: "Buy eggs", completed: false },
  { id: 5, task: "Read a book", completed: false },
  { id: 6, task: "Organize office", completed: false },
];
function renderTools() {
  const listTools = document.getElementById("myUL");
  listTools.innerHTML = "";
  todoList.forEach((item) => {
    if (item.completed === false) {
      listTools.innerHTML += `<li>${item.task} <span class="close">x</span></li>`;
    } else {
      listTools.innerHTML += `<li class="checked">${item.task} <span class="close">x</span></li>`;
    }
  });
}
renderTools();
function addTools() {
  let inputElementValue = document.getElementById("myInput").value;
  let id = todoList[todoList.length - 1].id + 1;
  let todo={
    id:id,
    task:inputElementValue,
    completed:false,
  };
  todoList.push(todo);
  renderTools(todo);
}
