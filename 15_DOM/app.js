let user = {
  id: 1,
  firstName: "Hello",
  city: "Bhopal",
};

console.log(user.id);

// console.log(document.children[0].children[1].style.backgroundColor);
// document.children[0].children[1].style.backgroundColor = "red";
// document.children[0].children[1].children[1].textContent = "DOM selectors";

// getElementsByTagName()

// let heading = document.getElementsByTagName("h1");
// console.log(heading[0].textContent);

//getElementsByClassName

// let para = document.getElementsByClassName("para");
// console.log(para);

//getElementById
// let para = document.getElementById("para");
// console.log(para);

// let para = document.querySelector("#para");
// console.log(para);

// let para = document.querySelector(".para");
// console.log(para);

// let heading = document.querySelector("h2");
// console.log(heading);

// querySelectorAll()
let para = document.querySelectorAll(".para");
para[0].textContent = "welcome";
para[0].style.fontSize = "52px";
para[0].style.backgroundColor = "green";
console.log(para);
