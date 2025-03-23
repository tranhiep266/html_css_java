function checkBtn() {
  let input;
  input = document.getElementById("myInput").value;
  let inputC = input.split("");
  document.getElementById("checkCount").textContent = inputC.length;
  console.log(inputC.length);
}
