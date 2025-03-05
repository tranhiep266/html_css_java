for(let i=100;i<1000;i++){
    let sum=Math.pow(Math.floor(i/100),3)+Math.pow(Math.floor((i/10)%10),3)+Math.pow(i%10,3);
    if(sum===i){
        document.write(`${i}<br>`);
    }
}