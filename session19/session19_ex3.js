let menu=+prompt("MENU\n1.VND-->USD\n2.USD-->VND");
if(menu===1){
    let money=+prompt();
    let after=money/23000;
    alert(after+" USD");
}else if(menu===2){
    let money=+prompt();
    let after=money*23000;
    alert(after+" VND");
}else{
    alert("nhap sai rui");
}