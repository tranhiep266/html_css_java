let number1 = +prompt("Nhap so dau tien");
let number2 = +prompt("Nhap so thu hai");
let min;
let max;
let random;
if(number1>number2){
    max=number1;
    min=number2;
    random = Math.random() * (max-min) + min;
    alert("So random: " + random);
}else if(number1<number2){
    max=number2;
    min=number1;
    random = Math.random() * (max-min) + min;
    alert("So random: " + random);
}else{
    alert("2 so bang nhau khong co so o giua");
}