let numbers = [];
let choice;
do {
  choice = +prompt(`
        -----MENU-----
        1.Nhập danh sách số nguyên.
        2.Tính trung bình các số.
        3.Tìm số chẵn lớn nhất.
        4.Tìm số lẻ nhỏ nhất.
        5.Thoát chương trình

        Lựa chọn của bạn:
        `);
  switch (choice) {
    case 1:
      for (;;) {
        let countAdd = +prompt("Nhập số lượng phần tử: ");
        if (isNaN(countAdd) || countAdd <= 0) {
          console.log("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
        } else {
          for (let i = 0; i < countAdd; i++) {
            let inputAdd = +prompt("Mời nhập phần tử bạn muốn thêm: ");
            numbers.push(inputAdd);
          }
          break;
        }
      }
      break;

    case 2:
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      console.log(`Tb cac phan tu: ${sum / numbers.length}`);
      break;

    case 3:
      let maxEven = null;
      for (let num of numbers) {
        if (num % 2 === 0) {
          if (maxEven === null || num > maxEven) {
            maxEven = num;
          }
        }
      }
      console.log(maxEven);
      break;

    case 4:
      let minOdd = null;
      for (let num of numbers) {
        if (num % 2 !== 0) {
          if (minOdd === null || num < minOdd) {
            minOdd = num;
          }
        }
      }
      console.log(minOdd);
      break;

    case 5:
      console.log("Tạm biệt.");
      break;

    default:
      console.log("Dữ liệu nhập không hợp lệ,vui lòng nhập lại");
  }
} while (choice !== 5);
