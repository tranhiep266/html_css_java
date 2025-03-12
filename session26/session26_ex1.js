let arr=[];
let n=+prompt(`Nhap so phan tu cua mang: `);
if(n===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    for(let i=0;i<n;i++){
        let number=prompt(`Nhap so: `);
        arr.push(number);
    }
    console.log(arr.filter(function(element){
        return element>=10
    }))
}