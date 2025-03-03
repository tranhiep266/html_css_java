let year=+prompt("Nhap nam can kiem tra");
let month=+prompt("Nhap thang can kiem tra");
if((year%4===0&&year%100!==0)||(year%400===0)){
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
            alert("Thang co 29 ngay");
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
}else{
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
            alert("Thang co 28 ngay ");
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
}