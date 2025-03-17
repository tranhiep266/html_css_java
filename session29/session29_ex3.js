let menu = `
    ----------MENU----------
    1.Thêm món ăn vào danh mục.
    2.Xóa món ăn theo tên khỏi danh mục.
    3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
    4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
    5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
    6.Thoát.
    Mời bạn nhập lựa chọn của bạn:
    `;
let menuFood = {};
let input;
while (input !== 6) {
  input = Number(prompt(menu));
  switch (input) {
    case 1:
      addFood();
      break;
    case 2:
      removeFood();
      break;
    case 3:
      updateFood();
      break;
    case 4:
      displayMenu();
      break;
    case 5:
      findFood();
      break;
    case 6:
      alert(`Tạm biệt`);
      break;
    default:
      alert(`Không nhập đúng dữ liệu`);
      break;
  }
}
function addFood() {
  let catalog = prompt("Nhập tên danh mục: ");
  let nameFood = prompt("Nhập tên món ăn: ");
  let price = Number(prompt("Nhập giá món ăn: "));
  let description = prompt("Nhập mô tả món ăn: ");
  if (!menuFood[catalog]) {
    menuFood[catalog] = [];
  }
  menuFood[catalog].push({ nameFood, price, description });
}
function removeFood() {
  let catalog = prompt("Nhập tên danh mục:");
  let nameFood = prompt("Nhập tên món ăn cần xóa:");
  if (menuFood[catalog]) {
    menuFood[catalog] = menuFood[catalog].filter(
      (food) => food.nameFood !== nameFood
    );
    console.log(`Đã xóa món "${nameFood}" khỏi danh mục "${catalog}"`);
  } else {
    console.log(`Danh mục "${catalog}" không tồn tại.`);
  }
}
function updateFood() {
  let catalog = prompt("Nhập tên danh mục:");
  let nameFood = prompt("Nhập tên món ăn cần cập nhật:");
  if (menuFood[catalog]) {
    let food = menuFood[catalog].find((food) => food.nameFood === nameFood);
    if (food) {
      let newFood = prompt("Nhập tên mới:") || food.nameFood;
      let newPrice = Number(prompt("Nhập giá mới:")) || food.price;
      let newDescription = prompt("Nhập mô tả mới:") || food.description;
      food.nameFood = newFood;
      food.price = newPrice;
      food.description = newDescription;
      console.log(`Đã cập nhật món "${nameFood}".`);
    } else {
      console.log(
        `Món "${nameFood}" không tồn tại trong danh mục "${catalog}".`
      );
    }
  } else {
    console.log(`Danh mục "${catalog}" không tồn tại.`);
  }
}
function displayMenu() {
  for (const catalog in menuFood) {
    console.log(`Danh mục: ${catalog}`);
    menuFood[catalog].forEach((food) => {
      console.log(
        `Tên: ${food.nameFood}, Giá: ${food.price}, Mô tả: ${food.description}`
      );
    });
  }
}
function findFood() {
  let findName = prompt("Nhập tên món ăn cần tìm:");
  for (const catalog in menuFood) {
    menuFood[catalog].forEach((food) => {
      if (food.nameFood.includes(findName))
        console.log(
          `Danh mục: ${catalog},Tên: ${food.nameFood}, Giá: ${food.price}, Mô tả: ${food.description}`
        );
    });
  }
}
