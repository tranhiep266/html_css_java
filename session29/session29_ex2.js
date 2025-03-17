function addproduct() {
    let name = prompt("Moi ban nhap vao ten san pham");
    let category = prompt("Moi ban nhap vao the loai san phamz");
    let quantity = prompt("Moi ban nhap so luong san pham");
    let price = prompt("Moi ban nhap vao gia san pham");
    let product = {
      id: Crud.length + 1,
      name,
      category,
      quantity,
      price,
    };
    Crud.push(product);
  }
  function displayproduct() {
    Crud.forEach(function (product, index) {
      console.log(`San pham thu ${Number(index) + 1}:`);
      console.log("Id san pham:", product.id);
      console.log("Ten san pham:", product.name);
      console.log("The loai:", product.category);
      console.log("Gia:", product.price);
      console.log("So luong:", product.quantity);
      console.log("------------------------");
    });
  }
  function displayOneproduct(product, index) {
    console.log(`San pham thu ${Number(index) + 1}:`);
    console.log("Id san pham:", product.id);
    console.log("Ten san pham:", product.name);
    console.log("The loai:", product.category);
    console.log("Gia:", product.price);
    console.log("So luong:", product.quantity);
    console.log("------------------------");
  }
  const Crud = [
    {
      id: 1,
      name: "bimbim",
      category: "food",
      quantity: 15,
      price: 6,
    },
    {
      id: 2,
      name: "coca",
      category: "drink",
      quantity: 5,
      price: 10,
    },
    {
      id: 3,
      name: "pepsi",
      category: "drink",
      quantity: 10,
      price: 9,
    },
  ];
  let menu = `
  ----------MENU----------
  1.Thêm sản phẩm vào danh sách sản phẩm.
  2.Hiển thị tất cả sản phẩm.
  3.Hiển thị chi tiết sản phẩm theo id.
  4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
  5.Xóa sản phẩm theo id.
  6.Lọc sản phẩm theo khoảng giá.
  7.Thoát.
  Mời bạn nhập lựa chọn của bạn:
  `;
  let input;
  while (input !== 7) {
    input = Number(prompt(menu));
    switch (input) {
      case 1:
        addproduct();
        break;
      case 2:
        displayproduct();
        break;
      case 3:
        let searchId = +prompt("Moi nhap id san pham muon tim");
        let findIndex = search("id", searchId);
        if (findIndex === -1) {
          console.log(`Khong co san pham voi tieu de:${searchId}`);
        } else {
          displayOneproduct(Crud[findIndex], findIndex);
        }
        break;
      case 4:
        let searchUpId = +prompt("Moi nhap id san pham can cap nhat:");
        let updateIndex = -1;
        for (let i in Crud) {
          if (searchUpId === Crud[i].id) {
            updateIndex = i;
            break;
          }
        }
        if (updateIndex === -1) {
          console.log("Khong tim thay");
        } else {
          Crud[updateIndex].name = prompt("Moi ten san pham moi:");
          Crud[updateIndex].price = +prompt("Moi nhap gia moi:");
          Crud[updateIndex].quantity = +prompt("Moi so luong moi:");
          Crud[updateIndex].category = prompt("Moi the loai moi:");
        }
        break;
      case 5:
        let removeId = +prompt("Moi nhap id quyen san pham can xoa:");
        let updateRemoveIndex = -1;
        for (let i in Crud) {
          if (removeId === Crud[i].id) {
            updateRemoveIndex = i;
            break;
          }
        }
        if (updateRemoveIndex === -1) {
          console.log("Khong tim thay");
        } else {
          Crud.splice(updateRemoveIndex, 1);
        }
        break;
      case 6:
        Crud.sort((a, b) => a.price - b.price);
        displayproduct();
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
    for (let i in Crud) {
      if (value === Crud[i][key]) {
        findIndex = i;
        break;
      }
    }
    return findIndex;
  }