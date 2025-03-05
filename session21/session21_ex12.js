for (let i=0;i<10;i++){
    let random_color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(`%cMau ngau nhien ${i + 1}: ${random_color}`, `color: ${random_color}`);
}
  