function addBook() {
  let title = prompt("Moi ban nhap vao tieu de sach");
  let author = prompt("Moi ban nhap vao tac gia sach");
  let year = prompt("Moi ban nhap vao nam xuat ban sach");
  let price = prompt("Moi ban nhap vao gia sach");
  let isAvailable = prompt("Moi ban nhap vao trang thai muon sach");
  let book = {
    id: library.length + 1,
    title,
    author,
    year,
    price,
    isAvailable,
  };
  library.push(book);
}
function displayBook() {
  library.forEach(function (book, index) {
    console.log(`Quyển sách ${index + 1}:`);
    console.log("Id Sach:", book.id);
    console.log("Tieu de:", book.title);
    console.log("Tac gia:", book.author);
    console.log("Gia:", book.price);
    console.log("Trang thai:", book.isAvailable);
    console.log("Nam:", book.year);
    console.log("------------------------");
  });
}
function displayOneBook(book, index) {
  console.log(`Quyển sách ${index + 1}:`);
  console.log("Id Sach:", book.id);
  console.log("Tieu de:", book.title);
  console.log("Tac gia:", book.author);
  console.log("Gia:", book.price);
  console.log("Trang thai:", book.isAvailable);
  console.log("Nam:", book.year);
  console.log("------------------------");
}
const library = [
  {
    id: 1,
    title: "munDo",
    author: "Sena",
    year: 1999,
    price: 36,
    isAvailable: true,
  },
  {
    id: 2,
    title: "DoPc",
    author: "Nase",
    year: 1989,
    price: 18,
    isAvailable: false,
  },
  {
    id: 3,
    title: "Moxumxue",
    author: "Gayff",
    year: 1990,
    price: 90,
    isAvailable: true,
  },
];
let menu = `
----------MENU----------
1.Thêm sách mới.
2.Hiển thị danh sách sách.
3.Tìm kiếm sách theo tiêu đề.
4.Cập nhật trạng thái mượn/trả sách theo id sách.
5.Xóa sách theo id sách ra khỏi danh sách.
6.Sắp xếp sách theo giá tăng dần.
7.Thoát.
Mời bạn nhập lựa chọn của bạn:
`;
let input;
while (input !== 7) {
  input = Number(prompt(menu));
  switch (input) {
    case 1:
      addBook();
      break;
    case 2:
      displayBook();
      break;
    case 3:
      let searchTitle = prompt("Moi nhap tieu de sach muon tim");
      let findIndex = search("title", searchTitle);
      if (findIndex === -1) {
        console.log(`Khong co quyen sach voi tieu de:${searchTitle}`);
      } else {
        displayOneBook(library[findIndex], findIndex);
      }
      break;
    case 4:
      let searchId = +prompt("Moi nhap id quyen sach can cap nhat:");
      let updateIndex = -1;
      for (let i in library) {
        if (searchId === library[i].id) {
          updateIndex = i;
          break;
        }
      }
      if (updateIndex === -1) {
        console.log("Khong tim thay");
      } else {
        library[updateIndex].price = +prompt("Moi nhap gia moi:");
        library[updateIndex].isAvailable = +prompt("Moi nhap trang thai:");
      }
      break;
    case 5:
      let removeId = +prompt("Moi nhap id quyen sach can cap nhat:");
      let updateRemoveIndex = -1;
      for (let i in library) {
        if (removeId === library[i].id) {
          updateRemoveIndex = i;
          break;
        }
      }
      if (updateRemoveIndex === -1) {
        console.log("Khong tim thay");
      } else {
        library.splice(updateRemoveIndex, 1);
      }
      break;
    case 6:
      library.sort((a, b) => a.price - b.price);
      displayBook();
      break;
    case 7:
      alert(`Tam biet`);
      break;
    default:
      alert(`Khong nhap dung du lieu`);
      break;
  }
}
function search(key, value) {
  let findIndex = -1;
  for (let i in library) {
    if (value === library[i][key]) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}