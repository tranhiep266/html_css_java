let arr=[];
n=+prompt("Số phần tử: ");
if(isNaN(n)||n<0){
    alert(`Giá trị không hợp lệ`);
}else if(n===0){
    alert(`Mảng không chứa phần tử`);
}else{
    numberInput(n);
}
function numberInput(n){
    for(let i=0;i<n;i++){
        let input=+prompt(`Nhập vào số nguyên: `);
        if(isNaN(input)){
            alert(`Giá trị không hợp lệ`);
            i--;
        }else{
            arr.push(input);
        }
    }
    findMin();
}
function findMin(){
    let min=arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    alert(`So nho nhat: ${min}`);
}