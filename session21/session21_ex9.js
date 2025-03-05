let number=+prompt();
let temp=1;
if(isNaN(number)){
    alert("du lieu nhap vao khong hop le");
}else if(number<0){
    alert("du lieu nhap vao khong hop le");
}else{
    if(number<2){
        temp=0;
    }else{
        for(let j=2;j*j<=number;j++){
           if(number%j==0){
            temp=0;
            break;
            }
        }
    }
    if(temp){
        alert(number+" la so nguyen to");
    }else{
        alert(number+" khong phai la so nguyen to");
    }    
}
