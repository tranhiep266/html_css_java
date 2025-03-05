let password="hello";
for(;;){
    let find=prompt("Yeu cau nguoi dung nhap mat khau: ");
    if(find===password){
        alert("Dung roi");
        break;
    }else{
        alert("Yeu cau nguoi dung nhap lai");
    }
}