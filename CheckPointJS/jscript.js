let savedBook = [];
let input = document.getElementById("inputValue");
let button = document.getElementById("saveButton");

button.addEventListener("click", myFunction);

function myFunction() {
  savedBook.push(input.value);
  localStorage.setItem("BookStorage", JSON.stringify(savedBook));
  let parsedArr = JSON.parse(localStorage.getItem("BookStorage"));
  document.getElementById("title").innerText = input.value;
  input.value = "";
  console.log(parsedArr);
}
