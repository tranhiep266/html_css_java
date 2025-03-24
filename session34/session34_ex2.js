let courses = [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2024-04-17",
    status: "Pending",
    assignedTo: "Anh Bach",
  },
  {
    id: 2,
    content: "Learn Javascript Session 02",
    dueDate: "2024-04-17",
    status: "Pending",
    assignedTo: "Lam th",
  },
  {
    id: 3,
    content: "Learn CSS Session 01",
    dueDate: "2024-04-17",
    status: "Pending",
    assignedTo: "Anh Hieu",
  },
];
let tableContainer = document.getElementById("taskTable");
function render() {
  tableContainer.innerHTML = "";
  for (let i in courses) {
    courses[i];
    let course = `
    <tr>
    <td>${courses[i].id}</td>
        <td>${courses[i].content}</td>
        <td>${courses[i].dueDate}</td>
        <td>${courses[i].status}</td>
        <td>${courses[i].assignedTo}</td>
        <td class="btn">
            <button id="updateBtn" class="Btn" onclick="updateTask(${courses[i].id})">Sua</button>
            <button id="removeBtn" class="Btn" onclick="deleteTask(${courses[i].id})">Xoa</button>
        </td>
    </tr>`;
    tableContainer.innerHTML += course;
  }
}
render();
function addTask() {
  const content = document.getElementById("content").value;
  const category = document.getElementById("category").value;
  const dueDate = document.getElementById("dueDateInput").value;
  const assignedTo = document.getElementById("Username").value;
  if (content && assignedTo) {
    const newTask = {
      id: courses.length + 1,
      content,
      dueDate,
      status: category === "on" ? "Pending" : "Unpending",
      assignedTo,
    };
    courses.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(courses));
    render();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}
function updateTask(id) {
  const task = courses.find((task) => task.id === id);
  if (task) {
    const newContent = prompt("Nhập nội dung mới:", task.content);
    if (newContent) {
      task.content = newContent;
      localStorage.setItem("tasks", JSON.stringify(courses));
      render();
    }
  }
}
function deleteTask(id) {
  courses = courses.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(courses));
  render();
}
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  courses = savedTasks.length ? savedTasks : courses;
}
loadTasks();
render();