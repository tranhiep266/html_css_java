let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
let menu = `
-----MENU-----
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
4.Tính số tiền thanh toán trong giỏ hàng
5.Thoát

Mời nhập lựa chọn của bạn:
`;
let choice;
while (choice !== 5) {
  choice = Number(prompt(menu));
  switch (choice) {
    case 1:
      displayProduct();
      break;
    case 2:
      buyProduct();
      break;
    case 3:
      sortProduct();
      break;
    case 4:
      calculateTotal(cart);
      break;
    case 5:
      alert("Hẹn gặp lại");
      break;
    default:
      alert("Nhập không đúng dữ liệu,vui lòng nhập lại");
      break;
  }
}
function displayProduct() {
  products.forEach(function (products, index) {
    console.log(`Sản phẩm thứ ${Number(index) + 1}:`);
    console.log("Id sản phẩm:", products.id);
    console.log("Tên sản phẩm:", products.name);
    console.log("Giá:", products.price);
    console.log("Số lượng:", products.quantity);
    console.log("Thể loại:", products.category);
    console.log("------------------------");
  });
}
function buyProduct() {
  let selectBuy = Number(prompt(`Nhập id sản phẩm muốn mua:`));
  if (selectBuy === 1) {
    let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
    if (products[0].quantity === 0) {
      alert("Số lượng sản phẩm trong cửa hàng đã hết");
    } else if (quantityBuy > products[0].quantity) {
      alert("Số lượng sản phẩm trong cửa hàng không đủ");
    } else {
      alert("Thêm vào giỏ hàng thành công");
      products[0].quantity -= quantityBuy;
      cart.push({
        id: products[0].id,
        name: products[0].name,
        price: products[0].price,
        quantity: quantityBuy,
      });
    }
  } else if (selectBuy === 2) {
    let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
    if (products[1].quantity === 0) {
      alert("Số lượng sản phẩm trong cửa hàng đã hết");
    } else if (quantityBuy > products[1].quantity) {
      alert("Số lượng sản phẩm trong cửa hàng không đủ");
    } else {
      alert("Thêm vào giỏ hàng thành công");
      products[1].quantity -= quantityBuy;
      cart.push({
        id: products[1].id,
        name: products[1].name,
        price: products[1].price,
        quantity: quantityBuy,
      });
    }
  } else if (selectBuy === 3) {
    let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
    if (products[2].quantity === 0) {
      alert("Số lượng sản phẩm trong cửa hàng đã hết");
    } else if (quantityBuy > products[2].quantity) {
      alert("Số lượng sản phẩm trong cửa hàng không đủ");
    } else {
      alert("Thêm vào giỏ hàng thành công");
      products[2].quantity -= quantityBuy;
      cart.push({
        id: products[2].id,
        name: products[2].name,
        price: products[2].price,
        quantity: quantityBuy,
      });
    }
  } else if (selectBuy === 4) {
    let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
    if (products[3].quantity === 0) {
      alert("Số lượng sản phẩm trong cửa hàng đã hết");
    } else if (quantityBuy > products[3].quantity) {
      alert("Số lượng sản phẩm trong cửa hàng không đủ");
    } else {
      alert("Thêm vào giỏ hàng thành công");
      products[3].quantity -= quantityBuy;
      cart.push({
        id: products[3].id,
        name: products[3].name,
        price: products[3].price,
        quantity: quantityBuy,
      });
    }
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
function calculateTotal(cart) {
  console.log(`Tổng số tiền phải trả là 
    ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
  `);
}
// function buyProduct() {
//   let selectBuy = Number(prompt(`Nhập id sản phẩm muốn mua:`));
//   let product = products.find((p) => p.id === selectBuy); // Tìm sản phẩm theo id

//   if (!product) {
//     alert("Id sản phẩm không hợp lệ!");
//     return;
//   }

//   let quantityBuy = Number(prompt("Nhập số lượng sản phẩm muốn mua:"));
//   if (product.quantity === 0) {
//     alert("Số lượng sản phẩm trong cửa hàng đã hết");
//   } else if (quantityBuy > product.quantity) {
//     alert("Số lượng sản phẩm trong cửa hàng không đủ");
//   } else {
//     alert("Thêm vào giỏ hàng thành công");
//     product.quantity -= quantityBuy;
//     cart.push({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: quantityBuy,
//     });
//   }
// }
// function displayProduct() {
//     let productList = products.map((p, index) =>
//       `Sản phẩm thứ ${index + 1}:\nId: ${p.id}\nTên: ${p.name}\nGiá: ${p.price}\nSố lượng: ${p.quantity}\nThể loại: ${p.category}\n------------------------`
//     ).join("\n");
//     alert(productList);
//   }
