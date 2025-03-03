let userName=prompt("Moi nhap tai khoan:(hehe) ");
let password=prompt("Moi nhap mat khau:(hihi) ");
let acc_balance;
if(userName==="hehe"&&password==="hihi"){
    acc_balance=+prompt("Nhap so du tai khoan: ");
    alert(acc_balance.toLocaleString("vi-VN")+" "+"VNĐ");
    let menu=+prompt("MENU\n1.Rut tien\n2.Nap tien");
    if(menu===1){
        let acc_add=+prompt("Nhap so tien rut ra: ");
        if(acc_add<=acc_balance){
        acc_balance=acc_balance-acc_add;
        alert("So tien con lai: "+acc_balance.toLocaleString("vi-VN")+" "+"VNĐ");
        }else{
            alert("So du khong du");
        }
    }else if(menu===2){
        let acc_remove=+prompt("Nhap so tien nap them: ");
        acc_balance=acc_balance+acc_remove;
        alert("So tien hien co: "+acc_balance.toLocaleString("vi-VN")+" "+"VNĐ");
    }else{
        alert("Nhap sai rui");
    }
}else{
    alert("Nhap sai tai khoan hoac mat khau");
}