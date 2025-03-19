let products = [
  {
    id: 1,
    name: "s25Ultra",
    price: 25000,
    quantity: 20,
    company: "Samsung",
  },
  {
    id: 2,
    name: "16proMax",
    price: 35000,
    quantity: 5,
    company: "Apple",
  },
  {
    id: 3,
    name: "s25",
    price: 20000,
    quantity: 15,
    company: "Samsung",
  },
  {
    id: 4,
    name: "16",
    price: 30000,
    quantity: 5,
    company: "Apple",
  },
];
let cart = [];
let menu = `
    -----MENU-----
    1.Hiển thị danh sách điện thoại theo hãng
    2.Thêm điện thoại mới vào cửa hàng
    3.Tìm kiếm điện thoại theo tên hoặc id
    4.Mua điện thoại
    5.Thanh toán tất cả điện thoại trong giỏ hàng
    6.Sắp xếp điện thoại theo giá
    7.Hiển thị tổng số tiền của các điện thoại trong kho
    8.Hiển thị tổng số lượng điện thoại theo từng hàng
    9.Thoát chương trình.
    
    Mời nhập lựa chọn của bạn:
    `;
let choice;
while (choice !== 9) {
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
      calculateTotalBuy();
      break;
    case 6:
      sortProduct();
      break;
    case 7:
      productTotalMoney();
      break;
    case 8:
      productTotal();
      break;
    case 9:
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
          p.company
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
        `Thể loại: ${product.company},Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`
      );
    }
  });
}
function addProduct() {
  let name = prompt("Moi ban nhap vao ten san pham");
  let company = prompt("Moi ban nhap vao the loai san pham");
  let quantity = Number(prompt("Moi ban nhap so luong san pham"));
  let price = Number(prompt("Moi ban nhap vao gia san pham"));
  let product = {
    id: products.length + 1,
    name,
    company,
    quantity,
    price,
  };
  products.push(product);
}
function productTotalMoney() {
  console.log(
    `Tổng số tiền sản phẩm trong kho là ${products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )}`
  );
}
function productTotal() {
  let totalCompany = products.reduce((acc, product) => {
    if (!acc[product.company]) {
      acc[product.company] = 0;
    }
    acc[product.company] += product.quantity;
    return acc;
  }, {});
  for (let company in totalCompany) {
    console.log(`${company}-${totalCompany[company]}`);
  }
}