let arr=[];
let n=+prompt(`Nhap so phan tu cua mang: `);
if(n===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    for(let i=0;i<n;i++){
        let number=+prompt(`Nhap so: `);
        arr.push(number);
    }
    let result=arr.reduce((acc,value,index)=>{
        if(value>acc.max){
            return{max:value,position:index};
        }
        return acc;
    },{max: -Infinity,position:-1});
    console.log(`max=${result.max}`);
    console.log(`position=${result.position}`);
}