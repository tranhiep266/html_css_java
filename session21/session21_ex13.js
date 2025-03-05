let n=10;
document.write(`a.<br>`);
for(let j=1;j<=n;j++){
    for(let i=n;i>=j;i--){
        document.write(`*`);
    }
    document.write(`<br>`);
}

document.write(`b.<br>`);
for(let j=1;j<=n;j++){
    for(let i=0;i<j;i++){
        document.write(`*`);
    }
    document.write(`<br>`);
}

document.write(`c.<br>`);
for(let j=1;j<=n;j++){
    for(let i=n;i>j;i--){
        document.write(`&nbsp;&nbsp;`);
    }
    for(let i=0;i<j;i++){
        document.write(`*`);
    }
    document.write(`<br>`);
}

document.write(`d.<br>`);
for(let j=1;j<=n;j++){
    for(let i=1;i<j;i++){
        document.write(`&nbsp;&nbsp;`);
    }
    for(let i=n;i>=j;i--){
        document.write(`*`);
    }
    document.write(`<br>`);
}