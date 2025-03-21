document.getElementById("addTask").onclick = () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = () => {
      if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        taskList.removeChild(li);
      }
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
};