let input=prompt("Nhap vao 10 den 20 so nguyen va dung dau , de cach nhau");
let numbers=input.split(",").map(num=>+num.trim());
let isValid=true;
for(let num of numbers){
    if(isNaN(num)){
        isValid=false;
        break;
    }
}
if(numbers.length<10&&numbers.length>20||!isValid){
    console.log("Du lieu khong hop le");
}else{
    let output=numbers.filter(num=>num%2!==0);
    console.log(output);
}