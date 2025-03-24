document.getElementById("btn").onclick = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (!email) {
    alert(`Nhập sai dữ liệu email`);
  }
  if (!password) {
    alert(`Nhap sai du lieu mat khau`);
  }
  if (confirmPassword !== password) {
    alert(`Mat khau khong trung khop`);
  }
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (accounts.some(account => account.email === email)) {
    alert("Email da ton tai");
  }else{
    alert("Them thanh cong");
  }
  accounts.push({ email, password });
  localStorage.setItem("accounts", JSON.stringify(accounts));
};
