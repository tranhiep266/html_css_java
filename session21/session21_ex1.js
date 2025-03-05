let sum=0;
for(let i=0;i<5;i++){
    let num=+prompt();
    if(num>0&&num%2!==0){
        sum+=num;
    }
}
alert(sum);