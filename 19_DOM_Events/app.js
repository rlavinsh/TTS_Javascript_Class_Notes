// Event Browser mein hone wala action
// let incrementBtn = document.querySelector("#incre");
// let decrementBtn = document.querySelector("#decre");
// let heading = document.querySelector("h2");
// let count = 0;
// // console.log(incrementBtn);
// incrementBtn.addEventListener("click", () => {
//   //   console.log("Increment clicked");
//   if (count >= 0) {
//     count++;
//     heading.innerText = count;
//   }
// });

// decrementBtn.addEventListener("click", () => {
//   //   console.log("Decrement");
//   if (count > 0) {
//     count--;
//     heading.innerText = count;
//   }
// });

// let btn = document.querySelector(".btn");
// let para = document.querySelector("p");
// console.log(para);

// // console.log(btn);
// btn.addEventListener("dblclick", () => {
//   //   console.log("hello kaise ho");
//   para.classList.toggle("para");
// });
// let heading = document.querySelector("h2");
// console.log(heading);

// let city = document.querySelector(".city");
// // console.log(city);
// city.addEventListener("change", () => {
//   //   console.log("hello");
//   console.log(city.value);
//   heading.innerText = city.value;
// });

// let colorChanger = document.querySelector(".colorChanger");

// colorChanger.addEventListener("change", () => {
//     document.body.style.backgroundColor = colorChanger.value;
// //   document.body.style.backgroundColor = "green";
// });

// let inputValue = document.querySelector("input");
// // console.log(inputValue.value = "Kaise ho dost");
// inputValue.addEventListener("input", () => {
//   console.log(inputValue.value);
//   if (inputValue.value.length == 10) {
//     alert("Limit Reached");
//   }
// });

let formSubmit = document.querySelector(".submit");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const user = {
    FirstName: firstName.value,
    LastName: lastName.value,
  };
  console.log(user);

  //   console.log(firstName.value);
  //   console.log(lastName.value);
});
