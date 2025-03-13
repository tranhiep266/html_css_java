function findMissNumber(arr){
    if(!Array.isArray(arr)){
        return `Du lieu khong hop le`;
    }
    let n=arr.length+1;
    realSum=(n*(arr[0]+arr[arr.length-1]))/2;
    nowSum=arr.reduce((sum,num)=>sum+num,0);
    return realSum-nowSum;
}
console.log(findMissNumber([1,2,3,5]));
console.log(findMissNumber([1,2,4,5]));
console.log(findMissNumber("abc"));