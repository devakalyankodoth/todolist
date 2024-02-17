// Logout
function logout() {
  window.location.href = "index.html";
}

document.getElementById("logout-link").addEventListener("click", function(e) {
  e.preventDefault();
  logout();
});

//Todo list
function todo() {
  window.location.href = "todo.html";
}

document.getElementById("todo-link").addEventListener("click", function(e) {
  e.preventDefault();
  todo();
});
