const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  menu.style.display = "flex";
  menu.style.top = "0";
  menu.style.right = "0";
}

function close() {
  menu.style.top = "-100%";
}

// current date
let today = new Date();
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let year = today.getFullYear();
let fullDate = year + ". " + month + ". " + day + ".";
document.getElementById("date-today").innerHTML = fullDate;
