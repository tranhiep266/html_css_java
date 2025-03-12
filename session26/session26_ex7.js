let input=prompt("Nhap vao 10 so nguyen va dung dau , de cach nhau");
let numbers=input.split(",").map(num=>+num.trim());
let isValid=true;
for(let num of numbers){
    if(isNaN(num)){
        isValid=false;
        break;
    }
}
if(numbers.length!==10||!isValid){
    console.log("Du lieu khong hop le");
}else{
    let squareNumbers=numbers.map(num=>num**2);
    let output=squareNumbers.filter(num=>num%2===0);
    console.log(output);
}