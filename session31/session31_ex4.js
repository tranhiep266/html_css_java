const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];
openModal.onclick = () => {
  modal.style.display = "block";
};
closeModal.onclick = () => {
  modal.style.display = "none";
};
