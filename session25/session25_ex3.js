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
function checkEven(arr){
    let arrEven=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]%2===0){
            arrEven.push(arr[i]);
        }
    }
    if(arrEven.length===0){
        return `Mảng không chứa số chẵn`;
    }else{
        return arrEven;
    }
}
let n=+prompt("Số phần tử: ");
if(isNaN(n)||n<0){
    alert(`Giá trị không hợp lệ`);
}else if(n===0){
    alert(`Mảng không chứa phần tử`);
}else{
    let arr=numberInput(n);
    let even=checkEven(arr);
    alert(even);
}