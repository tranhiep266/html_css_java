const date1=new Date("2006-06-26");
const date2=new Date("2006-06-28");
let timeDiffer=Math.abs(date2-date1);
let dayDiffer=timeDiffer/(1000*60*60*24);
alert("Chenh lech "+dayDiffer+" ngay");