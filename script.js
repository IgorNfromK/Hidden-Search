const search = document.querySelector(".search");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

function expandSearchFieldHandler() {
  search.classList.toggle("active");
  input.focus();
}
button.addEventListener("click", expandSearchFieldHandler);
