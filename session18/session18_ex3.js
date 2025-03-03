let user=prompt("Nhap ten nguoi dung");
if(user==="ADMIN"){
    let password=prompt("Moi nhap mat khau");
    if(password==="TheMaster"){
        alert("Welcome");
    }else if(password==="null"){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }
}else if(user===null){
    alert("Cancelled");
}else{
    alert("I Don't know you");
}