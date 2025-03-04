let text=prompt("Nhap mot chuoi bat ki")
let search=prompt("Nhap mot ki tu bat ki: ");
count=0;
if(search.length>2){
    alert("Do khong phai la ki tu");
}else{
    for(let i=0;i<text.length;i++){
        if(search===text[i]){
            count=1;
            break;
        }
    }
    if(count==1){
        alert("Ton tai ky tu can tim kiem");
    }else{
        alert("Khong ton tai ki tu can tim");
    }
}