let changeBtn = document.querySelector(".btn");
changeBtn.addEventListener("click", changeColor);

function changeColor() {
  let color = "#";
  let letters = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    let colorCode = Math.floor(Math.random() * letters.length);
    color = color + letters[colorCode];
  }
  document.body.style.backgroundColor = color;
}
