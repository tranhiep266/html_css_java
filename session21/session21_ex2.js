let count_odd=0;
let count_even=0;
for(let i=0;i<5;i++){
    let num=+prompt();
    if(num>0&&num%2!==0){
        count_odd++;
    }else if(num>0&&num%2===0){
        count_even++;
    }
}
alert("So luong so le: "+count_odd);
alert("So luong so chan: "+count_even);