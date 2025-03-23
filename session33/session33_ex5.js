const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    description:
      "Laptop cao cấp với màn hình 15 inch.CPU intel Core i7 và RAM 16GB",
  },
  {
    id: 2,
    name: "Iphone 15 Pro Max",
    price: 32990000,
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XMS",
    price: 7990000,
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];
function findProduct() {
  document.getElementById("gallery").style.display = "none";
  let inputP = document.getElementById("myInput").value.toLowerCase().trim();
  let found = false;
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(inputP)) {
        document.getElementById("Laptop").style.display = "none";
      found = true;
    }
  });
  if (!found) {
    alert(`Không tìm thấy sản phẩm`);
  }
}
