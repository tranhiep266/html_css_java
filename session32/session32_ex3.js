let subjectList = [
  { id: 1, task: "Toán" },
  { id: 2, task: "Lý" },
];
function renderTools() {
  const subjectTools = document.getElementById("myOL");
  subjectTools.innerHTML = "";
  subjectList.forEach((item) => {
    subjectTools.innerHTML += `<li>${item.task}</li>`;
  });
}
function addTools() {
  let inputElementValue = document.getElementById("myInput").value;
  if(inputElementValue===""){
    alert(`tên môn học không được để trống!`);
  }else{
    let id = subjectList[subjectList.length - 1].id + 1;
    let subject = {
      id: id,
      task: inputElementValue,
    };
    subjectList.push(subject);
    renderTools(subject);
  }
}