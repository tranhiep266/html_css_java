let arr=[];
let n=+prompt(`Nhap so phan tu cua mang: `);
if(n===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    for(let i=0;i<n;i++){
        let number=+prompt(`Nhap so: `);
        arr.push(number);
    }
    let isPrime=(element)=>{
        if(element<=1) return false;
        for(let i=2;i<=Math.sqrt(element);i++){
            if(element%i===0){
                return false;
            }
        }
        return true;
    }
    console.log(arr.filter(isPrime));
}