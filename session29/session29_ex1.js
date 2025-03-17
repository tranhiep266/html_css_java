function addContact() {
  let name = prompt("Moi ban nhap vao Ten ");
  let email = prompt("Moi ban nhap vao email");
  let phone = prompt("Moi ban nhap vao So dien thoai ");
  let contact = {
    id: Contact.length + 1,
    name,
    email,
    phone,
  };
  Contact.push(contact);
}
function displaycontact() {
  Contact.forEach(function (contact, index) {
    console.log(`Nguoi thu ${Number(index) + 1}:`);
    console.log("Id danh ba:", contact.id);
    console.log("Ten:", contact.name);
    console.log("So dien thoai:", contact.phone);
    console.log("Email:", contact.email);
    console.log("------------------------");
  });
}
function displayOnecontact(contact, index) {
  console.log(`Nguoi thu ${Number(index) + 1}:`);
  console.log("Id danh ba:", contact.id);
  console.log("Ten:", contact.name);
  console.log("So dien thoai:", contact.phone);
  console.log("Email:", contact.email);
  console.log("------------------------");
}
const Contact = [
  {
    id: 1,
    name: "Tran Quang Hiep",
    email: "tranhiep@gmail.com",
    phone: "0945666888",
  },
  {
    id: 2,
    name: "Nguyen Quang Hiep",
    email: "nguyenhiep@gmail.com",
    phone: "0945666999",
  },
  {
    id: 3,
    name: "Le Quang Hiep",
    email: "lehiep@gmail.com",
    phone: "0945666777",
  },
];
let menu = `
  ----------MENU----------
  1.Thêm đối tượng Contact vào danh sách liên hệ.
  2.Hiển thị danh sách danh bạ.
  3.Tìm kiếm thông tin Contact theo số điện thoại.
  4.Cập nhật thông tin Contact(name, email, phone) theo id.
  5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
  6.Thoát.
  Mời bạn nhập lựa chọn của bạn:
  `;
let input;
while (input !== 6) {
  input = Number(prompt(menu));
  switch (input) {
    case 1:
      addContact();
      break;
    case 2:
      displaycontact();
      break;
    case 3:
      let searchPhone = prompt("Moi nhap so dien thoai muon tim");
      let findIndex = search("phone", searchPhone);
      if (findIndex === -1) {
        console.log(`Khong co so dien thoai :${searchPhone}`);
      } else {
        displayOnecontact(Contact[findIndex], findIndex);
      }
      break;
    case 4:
      let searchId = +prompt("Moi nhap id nguoi dung can cap nhat:");
      let updateIndex = -1;
      for (let i in Contact) {
        if (searchId === Contact[i].id) {
          updateIndex = i;
          break;
        }
      }
      if (updateIndex === -1) {
        console.log("Khong tim thay");
      } else {
        Contact[updateIndex].phone = prompt("Moi nhap So dien thoai moi:");
      }
      break;
    case 5:
      let removeId = +prompt("Moi nhap id can xoa:");
      let updateRemoveIndex = -1;
      for (let i in Contact) {
        if (removeId === Contact[i].id) {
          updateRemoveIndex = i;
          break;
        }
      }
      if (updateRemoveIndex === -1) {
        console.log("Khong tim thay");
      } else {
        Contact.splice(updateRemoveIndex, 1);
      }
      break;
    case 6:
      alert(`Tam biet`);
      break;
    default:
      alert(`Khong nhap dung du lieu`);
      break;
  }
}
function search(key, value) {
  let findIndex = -1;
  for (let i in Contact) {
    if (value === Contact[i][key]) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
