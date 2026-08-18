// let btn = document.querySelector(".btn");
// // console.log(btn);
// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// Event bubbling -> ek event ka bubble hona

// let grandParent = document.querySelector(".grandParent");

// let parent = document.querySelector(".parent");

// let child = document.querySelector(".child");

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// grandParent.addEventListener("click", () => {
//   console.log("grandParent clicked");
// });

// parent.addEventListener("click", (event) => {
//   //   event.sto0Propagation();
//   console.log("Parent clicked");
// });

// document.body.addEventListener("click", () => {
//   console.log("body clicked");
// });

// document.addEventListener("click", () => {
//   console.log("document clicked");
// });

// Event Capturing

// let grandParent = document.querySelector(".grandParent");

// let parent = document.querySelector(".parent");

// let child = document.querySelector(".child");

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true,
// );

// grandParent.addEventListener(
//   "click",
//   (event) => {
//     // event.stopPropagation()
//     console.log("grandParent clicked");
//   },
//   true,
// );

// parent.addEventListener(
//   "click",
//   (event) => {
//     //   event.stopPropagation();
//     console.log("Parent clicked");
//   },
//   true,
// );

// Event Delegation

let container = document.querySelector(".container");

let card = document.querySelector(".card");

let allButtons = document.querySelectorAll(".delete");

let addBtn = document.querySelector(".new");
// console.log(addBtn);

// console.log(allButtons);

addBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `<h3>car${Math.floor(Math.random() * 100)}</h3>
        <button class="delete">Delete</button>`;

  container.append(div);
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    console.log("Item removed");
  }
});

// allButtons.forEach((btn) => {
//   //   console.log(btn);
//   btn.addEventListener("click", (event) => {
//     console.log(event.target.parentElement.remove());

//     // console.log("remove");
//   });
// });
