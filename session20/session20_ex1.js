let num=+prompt("Nhap 1 so bat ki: ");
let sum=0;
if(num>0){
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    alert("Tong:"+sum);
}else{
    alert("du lieu nhap vao khong hop le");
}
