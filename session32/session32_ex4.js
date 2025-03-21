let emailC = `email hợp lệ!`;
let emailF = `email không hợp lệ!`;
function checkC() {
  let inputE = document.getElementById("myInput").value;
  if (inputE.includes("@") && inputE.includes(".com")) {
    document.getElementById("displayC").textContent = emailC;
    document.body.style.color = `green`;
  } else {
    document.getElementById("displayC").textContent = emailF;
    document.body.style.color = `red`;
  }
}
