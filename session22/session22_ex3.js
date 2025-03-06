let number=prompt("Nhap 1 so bat ki: ");
if(isNaN(Number(number))){
    alert("day so khong hop le");
}else{
    number=number.split("");
    for(let i=0;i<number.length/2;i++){
        let temp=number[i];
        number[i]=number[number.length-1-i];
        number[number.length-1-i]=temp;
    }
    number=number.join("");
    alert(number);
}
