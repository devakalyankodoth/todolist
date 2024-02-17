// login autentication
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let failed = document.getElementById("failed");
  if (username == "admin" && password == "12345") {
    return true;
  } else {
    failed.innerHTML = "Invalid username or password.";
    failed.style.color = "red";
    return false;
  }
}