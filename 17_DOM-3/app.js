// let container = document.querySelector("div");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   //   console.log("clicked");
//   //   container.classList.add("container");

//   //   container.classList.remove("container");

//   container.classList.toggle("container");
// });

let body = document.body;
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    btn1.textContent = "change to Light Theme";
  } else {
    btn1.textContent = "change to Dark Theme";
  }
});
