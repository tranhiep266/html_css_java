let month=+prompt("Nhap thang muon biet ngay: ");
// if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
//     alert("Thang "+month+" co 31 ngay");
// }else if(month===2){
//     alert("Thang "+month+" co 28 ngay hoac 29 ngay neu la nam nhuan");
// }else if(month===4 || month===6 || month===9 || month===11){
//     alert("Thang "+month+" co 30 ngay");
// }else{
//     alert("Thang ban nhap khong ton tai");
// }
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Thang co 31 ngay");
        break;
    case 2:
        alert("Thang co 28 ngay hoac 29 ngay neu la nam nhuan");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Thang co 30 ngay");
        break;
    default:
        alert("Thang ban nhap khong ton tai");
}