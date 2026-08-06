// let heading = document.querySelector("h1");
// // heading.innerHTML= `<u>Introduction</u>`;
// console.log(heading);
// let para = document.querySelector("p");
// // console.log(para.innerText);
// console.log(para.textContent);

//textContent => yeah css ko ignore karta hein

//innerText = yeah css ko respect karta hein

// innerHTML = iska use kar k hum direct kisi bhi tag ka use kar k ushe ushi tag k according update kar sakte hein

let container = document.querySelector(".list");
// console.log(container);

const heading = document.createElement("h1");
console.log(heading);

let li = document.createElement("li");
li.textContent = "PineApple";
console.log(li);

let li1 = document.createElement("li");
li1.textContent = "Banana";
console.log(li1);

container.append(li);
container.prepend(li1);

// createElement -> eski help se mein kisi bhi tag ko create kar sakta hu

//append() -> agar mujhe koi bhi tag add karna ho last mein

//prepend() -> eski help se mein starting mein kisi bhi tag ko add kar sakta hu

let li2 = document.createElement("li");
let mango = document.querySelector("#mango");
// console.log(mango);

li2.textContent = "papaya";
console.log(li2);

container.insertBefore(li2, mango);

//insertBefore()
