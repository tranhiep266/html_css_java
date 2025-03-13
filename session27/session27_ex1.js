let choice;
let a,b;
for(;;){
    a=+prompt("Nhap a: ");
    b=+prompt("Nhap b: ");
    if(!isNaN(a)&&!isNaN(b)){
        break;
    }else{
        alert("Nhap sai yeu cau nhap lai");
    }
}
do{
    choice=+prompt(`
        -----MENU-----
        1.Cộng hai số.
        2.Trừ hai số.
        3.Nhân hai số.
        4.Chia hai số.
        5.Thoát.

        Lựa chọn của bạn:
        `);
    switch(choice){
        case 1:
            console.log(a+b);
            break;
            
        case 2:
            console.log(a-b);
            break;

        case 3:
            console.log(a*b);
            break;
            
        case 4:
            console.log(a/b);
            break;

        case 5:
            alert("Tạm biệt.");
            break;
        
        default:
            alert("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
    }
}while(choice!==5)