function sum(a,b){
    if(isNaN(a)||isNaN(b)||Number.isInteger(a)||Number.isInteger(b)){
      return 'dữ liệu không hợp lệ';
    }
    return Number(a) + Number(b);
}
let a=prompt(`Nhập số thứ 1: `);
let b=prompt(`Nhập số thứ 2: `);
alert(sum(a,b));