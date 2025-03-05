let num=+prompt("Nhap so bat ki: ");
if(isNaN(num)){
    alert("du lieu nhap vao khong hop le");
}else if(num<0){
    alert("du lieu nhap vao khong hop le");
}else{
    for(let i=1;i<=num;i++){
        if(num%i==0){
            document.write(`${i} <br>`);
        }
    }
}