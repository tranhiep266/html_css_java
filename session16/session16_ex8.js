let number1 = +prompt();
let number2 = +prompt();
let number3 = +prompt();
let max;
if(number1 >= number2 && number1 >= number3){
    max = number1;
}else if(number2 >= number1 && number2 >= number3) {
    max = number3;
}else{
    max = number3;
}
alert("So lon nhat: " + max);