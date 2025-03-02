let year=+prompt("Nhap nam can kiem tra");
if((year%4===0&&year%100!==0)||(year%400===0)){
    alert(year+" la nam nhuan");
}else{
    alert(year+" khong phai la nam nhuan");
}