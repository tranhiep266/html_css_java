let products = [
  {
    id: 1,
    name: "Conan",
    price: 20000,
    quantity: 20,
    category: "hoạt hình",
  },
  {
    id: 2,
    name: "Cô giáo Thảo",
    price: 80000,
    quantity: 5,
    category: "người lớn",
  },
  {
    id: 3,
    name: "Shin-cậu bé bút chì",
    price: 20000,
    quantity: 15,
    category: "hoạt hình",
  },
  {
    id: 4,
    name: "Vàng Anh",
    price: 80000,
    quantity: 5,
    category: "người lớn",
  },
];
let cart = [];
let menu = `
  -----MENU-----
  1.Hiển thị danh sách sách theo thể loại 
  2.Thêm sách mới vào kho
  3.Tìm kiếm sách theo tên hoặc id.
  4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
  5.Sắp xếp sách theo giá
  6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
  7.Hiển thị tổng số lượng sách trong kho.
  8.Thoát chương trình.
  
  Mời nhập lựa chọn của bạn:
  `;
let choice;
while (choice !== 8) {
  choice = Number(prompt(menu));
  switch (choice) {
    case 1:
      displayProduct();
      break;
    case 2:
      addProduct();
      break;
    case 3:
      findProduct();
      break;
    case 4:
      buyProduct();
      break;
    case 5:
      sortProduct();
      break;
    case 6:
      calculateTotalBuy();
      break;
    case 7:
      productTotal();
      break;
    case 8:
      alert("Hẹn gặp lại");
      break;
    default:
      alert("Nhập không đúng dữ liệu,vui lòng nhập lại");
      break;
  }
}
function displayProduct() {
  let productList = products
    .map(
      (p, index) =>
        `Sản phẩm thứ ${index + 1}:\nId: ${p.id}\nTên: ${p.name}\nGiá: ${
          p.price
        }\nSố lượng: ${p.quantity}\nThể loại: ${
          p.category
        }\n------------------------`
    )
    .join("\n");
  console.log(productList);
}
function buyProduct() {
  let selectBuy = Number(prompt(`Nhập id sản phẩm muốn mua:`));
  let product = products.find((p) => p.id === selectBuy); // Tìm sản phẩm theo id

  if (!product) {
    alert("Id sản phẩm không hợp lệ!");
    return;
  }

  let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
  if (product.quantity === 0) {
    alert("Số lượng sản phẩm trong cửa hàng đã hết");
  } else if (quantityBuy > product.quantity) {
    alert("Số lượng sản phẩm trong cửa hàng không đủ");
  } else {
    alert("Thêm vào giỏ hàng thành công");
    product.quantity -= quantityBuy;
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantityBuy,
    });
  }
}
function sortProduct() {
  let choiceSort = Number(
    prompt(`
          1.Tăng dần.
          2.Giảm dần.
      `)
  );
  if (choiceSort === 1) {
    products.sort((a, b) => a.price - b.price);
    displayProduct();
  } else if (choiceSort === 2) {
    products.sort((a, b) => b.price - a.price);
    displayProduct();
  } else {
    alert(`Nhập dữ liệu không chính xác`);
  }
}
function calculateTotalBuy() {
  console.log(`Tổng số tiền phải trả là 
      ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
    `);
}
function findProduct() {
  let findId = Number(prompt("Nhập id sách cần tìm:"));
  products.forEach((product) => {
    if (product.id === findId) {
      console.log(
        `Thể loại: ${product.category},Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`
      );
    }
  });
}
function addProduct() {
  let name = prompt("Moi ban nhap vao ten san pham");
  let category = prompt("Moi ban nhap vao the loai san pham");
  let quantity = Number(prompt("Moi ban nhap so luong san pham"));
  let price = Number(prompt("Moi ban nhap vao gia san pham"));
  let product = {
    id: products.length + 1,
    name,
    category,
    quantity,
    price,
  };
  products.push(product);
}
function productTotal() {
  console.log(
    `Tổng số sản phẩm là ${products.reduce(
      (total, item) => total + item.quantity,
      0
    )}`
  );
}
