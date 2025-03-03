let month=+prompt("Nhap thang muon mua: ");
switch(month){
    case 1:
    case 2:
    case 3:
        alert("mua xuan");
        break;
    case 4:
    case 5:
    case 6:
        alert("mua ha");
        break;
    case 7:
    case 8:
    case 9:
        alert("mua thu");
        break;
    case 10:
    case 11:
    case 12:
        alert("mua dong");
        break;
    default:
        alert("Thang ban nhap khong ton tai");
}