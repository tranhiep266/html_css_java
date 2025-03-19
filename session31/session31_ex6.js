document.getElementById("loginButton").onclick = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "huanrose@gmail.com" && password === "123456") {
    console.log("login thành công");
  } else {
    console.log("username hoặc password không đúng");
  }
};
