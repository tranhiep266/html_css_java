let numbers=[2,5,7,4,1,8,6,2,5,7];
let find=+prompt();
let count=0;
for(let i=0;i<numbers.length;i++){
    if(find===numbers[i]){
        count++;
    }
}
if(count===0){
    alert("so "+find+" khong ton tai trong mang");
}else{
    alert("so "+find+" xuat hien "+count+" lan");
}