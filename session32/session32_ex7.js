function openImg(imageSrc) {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal').innerHTML = `<img id="modalImage" src="${imageSrc}" />`;
}

function closeImg() {
    document.getElementById('modal').style.display = "none";
}
