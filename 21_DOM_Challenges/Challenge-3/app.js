let generateBtn = document.querySelector("#generateBtn");

function generateCode() {
  let color = "#";
  let letters = "0123456789abcdef";

  for (let i = 0; i <= 5; i++) {
    let idx = Math.floor(Math.random() * letters.length);
    color = color + letters[idx];
  }
  return color;
}

function createCard(colorCode) {
  let card = document.createElement("div");
  card.setAttribute("class", "color-card");
  card.style.backgroundColor = colorCode;

  let span = document.createElement("span");
  span.setAttribute("class", "color-code");
  span.textContent = colorCode;

  card.append(span);
  return card;
}

let colorPalette = document.querySelector("#colorPalette");

function generatePallete() {
  colorPalette = document.querySelector("#colorPalette");
  colorPalette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let colorCode = generateCode();
    let card = createCard(colorCode);
    colorPalette.append(card);
  }
}
generatePallete();

generateBtn.addEventListener("click", generatePallete);

colorPalette.addEventListener("click", (event) => {
  // console.log(event.target);

  if (event.target.classList.contains("color-code")) {
    // console.log("copy karo");
    let hexVal = event.target.innerText;
    // console.log(hexVal);
    navigator.clipboard
      .writeText(hexVal)
      .then(() => {
        alert("color copied");
      })
      .catch((err) => {
        alert("Failed");
      });
  }
});

