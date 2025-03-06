let number=prompt("Nhap 1 so bat ki: ");
if(isNaN(Number(number))){
    alert("day so khong hop le");
}else{
    number=number.split("");
    let max=number[0];
    for(let i=0;i<number.length;i++){
        if(max<number[i]){
            max=number[i];
        }
    }
    number=number.join("");
    alert(max+` la so lon nhat trong day so`);
}
