localStorage.setItem("email", "test@example.com");
localStorage.setItem("password", "password123");
function loginForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === "" || password === "") {
        alert("Hay nhap du du lieu");
        return false;
    }
    if (email === storedEmail && password === storedPassword) {
        alert("Login thanh cong");
        return true;
    } else {
        alert("Sai email hoac password");
        return false;
    }
}