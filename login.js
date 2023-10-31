function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "vb_dongthap" && password === "Bhxh@102022#") {
      window.location.href = "trangchinh.html";
  } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
  }
}
