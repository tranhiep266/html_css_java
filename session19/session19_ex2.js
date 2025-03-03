let text=prompt("Nhap 1 ky tu de kiem tra: ");
if(text.length>1){
    alert("Khong phai chu cai");
}else{
    if(text>="a"&&text<="z"||text>="A"&&text<="Z"){
        alert("Ky tu "+text+" la chu cai");
    }else{
        alert("Khong phai chu cai");
    }    
}
