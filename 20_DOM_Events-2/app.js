// let btn = document.querySelector(".btn");
// // console.log(btn);
// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// Event bubbling -> ek event ka bubble hona

let grandParent = document.querySelector(".grandParent");

let parent = document.querySelector(".parent");

let child = document.querySelector(".child");

child.addEventListener("click", () => {
  console.log("child clicked");
});

grandParent.addEventListener("click", () => {
  console.log("grandParent clicked");
});

parent.addEventListener("click", (event) => {
  //   event.stopPropagation();
  console.log("Parent clicked");
});

document.body.addEventListener("click", () => {
  console.log("body clicked");
});

document.addEventListener("click", () => {
  console.log("document clicked");
});

// Event Capturing



