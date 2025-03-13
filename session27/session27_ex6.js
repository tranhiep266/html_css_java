function isArithmetic(arr) {
  if (!Array.isArray(arr)) {
    return `Du lieu khong hop le`;
  }
  if (arr.length < 2) {
    return false;
  }
  let distance = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== distance) {
      return false;
    }
  }
  return true;
}
console.log(isArithmetic([2, 4, 6, 8]));
console.log(isArithmetic([3, 6, 9, 12, 14]));
console.log(isArithmetic("abc"));