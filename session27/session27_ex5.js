function dvdMiniArr(arr, n) {
  let miniArr = [];
  for (let i = 0; i < arr.length; i += n) {
    miniArr.push(arr.slice(i, i + n));
  }
  return miniArr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = +prompt(`So phan tu cua 1 mang con:`);
if (n > 0 && Number.isInteger(n)) {
  console.log(dvdMiniArr(arr, n));
} else {
  console.log(`Du lieu khong hop le`);
}
