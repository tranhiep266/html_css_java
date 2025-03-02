let side_1=+prompt("Nhap canh thu 1:");
let side_2=+prompt("Nhap canh thu 2:");
let side_3=+prompt("Nhap canh thu 3:");
if(side_1+side_2>side_3&&side_1+side_3>side_2&&side_2+side_3>side_1){
    if(side_1==side_2&side_2==side_3){
        alert("tam giac deu");
    }else if(side_1==side_2||side_2==side_3||side_1==side_3){
        alert("tam giac can");
    }else if(side_1*side_1 + side_2*side_2 == side_3*side_3 || side_1*side_1 + side_3*side_3 == side_2*side_2 || side_3*side_3 + side_2*side_2 == side_1*side_1){
        alert("tam giac vuong");
    }else{
        alert("tam giac thuong");
    }
}else{
    alert("khong phai tam giac");
}