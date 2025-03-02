let Math=+prompt("Moi nhap diem Toan");
let Vietnamese=+prompt("Moi nhap diem Van");
let English=+prompt("Moi nhap diem Tieng anh");
let overate=(Math+Vietnamese+English)/3;
if(overate>=8){
    alert("Gioi");
}else if(overate>=6.5){
    alert("Kha");
}else if(overate>=5){
    alert("Trung binh");
}else{
    alert("Yeu");
}