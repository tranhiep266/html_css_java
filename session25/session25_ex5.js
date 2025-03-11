function numberInput(n){
    let arr=[];
    for(let i=0;i<n;i++){
        let input=+prompt(`Nhập vào số nguyên: `);
        if(isNaN(input)){
            alert(`Giá trị không hợp lệ`);
            i--;
        }else{
            arr.push(input);
        }
    }
    return arr;
}
function checkIntegers(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i])&&arr[i]>0){
            count++;
        }
    }
    return count===0?'không có số nguyên dương trong mảng':count;
}
let n=+prompt("Số phần tử: ");
if(isNaN(n)||n<0){
    alert(`Giá trị không hợp lệ`);
}else if(n===0){
    alert(`Mảng không chứa phần tử`);
}else{
    let arr=numberInput(n);
    let checkI=checkIntegers(arr);
    alert(checkI);
}