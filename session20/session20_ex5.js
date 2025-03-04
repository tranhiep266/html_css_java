let num1=+prompt("Nhap so bat ki: ");
let num2=+prompt("Nhap so mu can : ");
let multi=1;

if(isNaN(num1)||isNaN(num2)){
    alert("du lieu nhap vao khong hop le");
}else if(num2<0){
    alert("du lieu nhap vao khong hop le");
}else{
    for(let i=1;i<=num2;i++){
        multi*=num1;
    }
    alert(multi);
}