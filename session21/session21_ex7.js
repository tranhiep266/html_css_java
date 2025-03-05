let principal;
let rate;
let month;
let interest=0;
let pay=0;
for(;;){
    principal=+prompt("Nhap so tien goc: ");
    rate=+prompt("Nhap lai suat: ");
    month=+prompt("Nhap so thang gui: ");
    if(!isNaN(principal)&&!isNaN(rate)&&!isNaN(month)&&principal>0&&rate>0&&month>0){
        break;
    }else{
        alert("Nhap sai yeu cau nhap lai");
    }
}
pay=principal;
for(let i=0;i<3;i++){
    pay=pay*rate/100+pay;
}
interest=pay-principal;
document.write(`Tien lai:${interest.toPrecision(5)}<br>`);
document.write(`Tien nhan duoc:${pay}`);
