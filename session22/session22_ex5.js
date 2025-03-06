let numberArray=[];
let count=0;
let sumOdd=0;
let sumEven=0;
for(;;){
    number=+prompt();
    if(isNaN(number)){
        alert("day so khong hop le");
    }else{
        numberArray.splice(count,0,number);
        if(numberArray[count]%2===0){
            sumEven+=numberArray[count];
        }else{
            sumOdd+=numberArray[count];
        }
        count++;
    }
    if(count===5){
        alert("Tong cac so le: "+sumOdd);
        alert("Tong cac so chan: "+sumEven);
        break;
    }
}