let dish = [
  { id: 1, name: "Rau sạch", category: "Đồ ăn" },
  { id: 2, name: "Thịt lợn", category: "Đồ ăn" },
  { id: 3, name: "Pepsi không calo", category: "Nước" },
  { id: 4, name: "Cocacola", category: "Nước" },
  { id: 5, name: "Cờ lê", category: "Dụng cụ" },
  { id: 6, name: "Tuy vít", category: "Dụng cụ" },
];
function filterProducts() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  const productList = document.getElementById("myUL");
  productList.innerHTML = "";
  dish.forEach((product) => {
    if (selectedCategory === "" || product.category === selectedCategory) {
      productList.innerHTML += `<li><b>Tên đồ ăn:</b> ${product.name} - <b>Danh mục:</b> ${product.category}</li>`;
    }
  });
}
