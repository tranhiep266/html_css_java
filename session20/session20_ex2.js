let num=+prompt("Nhap vao 1 so bat ki: ");
if(num>0){
    for(let i=1;i<=num;i++){
        if(i%5==0){
            document.write(i+",");
        }
    }
}else{
    alert("du lieu nhap vao khong hop le");
}