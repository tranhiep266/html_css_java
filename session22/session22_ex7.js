let countAdd=+prompt("Nhập số lượng phần tử: ");
let arr=[];
if(isNaN(countAdd)||countAdd<=0){
    alert("Dữ liệu nhập không hợp lệ");
}else{
    for(let i=0;i<countAdd;i++){
        let inputAdd=prompt("Mời nhập phần tử bạn muốn thêm: ")
        arr.push(inputAdd);
    }
}
arr.sort((a,b)=>a-b);
alert(arr);