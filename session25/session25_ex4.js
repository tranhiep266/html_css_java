let number=+prompt("Nhập 1 số nguyên: ");
if(isNaN(number)||number<0){
    alert(`Giá trị không hợp lệ`);
}else if(number===0){
    alert(`Mảng không chứa phần tử`);
}else{
    alert(isPrime(number));
}
function isPrime(number){
    if(!Number.isInteger(number)||number<=1||isNaN(number)){
        return 'dữ liệu không hợp lệ';
    }
    for (let i=2;i<number;i++) {
        if(number%i===0){
            return 'không phải là số nguyên tố';
        }
    }
    return 'là số nguyên tố';
}