let number=+prompt();
if(isNaN(number)&&number<=0){
    alert("du lieu nhap vao khong hop le");
}else{
    let count=0;
    let candidate=2;
    while(count<number){
        let temp=true;
        for(let j=2;j*j<=candidate;j++){
            if(candidate%j===0){
                temp=false;
                break;
            }
        }
        if(temp){
            document.write(`${candidate} <br>`);
            count++;
        }
        candidate++;
    }
}