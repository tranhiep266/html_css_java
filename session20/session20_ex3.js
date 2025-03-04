let num=+prompt("Nhap 1 so nguyen: ");
let count=0;
if(isNaN(num)){
    alert("So khong hop le");
}else{
    let str=num.toString();
    for(let i=0;i<(str.length/2);i++){
        if(str[i]!==str[str.length-i-1]){
            count=0;
            break;
        }else{
            count=1;
        }
    }
    if(count===1){
        alert(num+" la so doi xung");
    }else{
        alert(num+" khong la so doi xung");
    }
}