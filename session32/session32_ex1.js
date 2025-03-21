function changeColor() {
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
  RandomColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = RandomColor;
}
