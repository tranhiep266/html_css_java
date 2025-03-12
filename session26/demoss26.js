// function myFn(fn){
//     fn();

//     return ()=>10;
// }
let numberList=[10,30,20,50,80];
let resultForEach=numberList.forEach(function(element,index){console.log(index,element)});
let resultMap=numberList.map(function(element,index){console.log(index,element)});
let resultFilter = numberList.filter(function(element,index){
    return element>20;
});
numberList.reduce(function(acc,cur){
    console.log("acc",acc);
    console.log("cur",cur);
    return acc+cur;
},0);