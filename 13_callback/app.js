// kya ish function ko mein ek variable mein store kar sakta hu

// let greet = function () {
//   console.log("Hello");
// };

// greet();

// kya mein ek function ko as an argument pass kar sakta hu

// function greet(fun) {
//   console.log("Welcome");
//   fun()
// }

// function sayBye() {
//   console.log("Bye Bye");
// }
// greet(sayBye)

// kya mein js mein kisi bhi function ko return kar sakta hu
// function outer() {
//   return function () {
//     console.log("Inside the function");
//   };
// }

// let result = outer();
// result();

// object mein ek function banana hein
// let user = {
//   firstName: "Rohit",
//   greet: function () {
//     console.log("welcome students");
//   },
// };

// user.greet()

// kya hum array k andar function store kar sakte hein
// function greet() {
//   console.log("welcome");
// }

// function sayBye() {
//   console.log("Bye Bye");
// }
// let arr = [greet, sayBye];
// // console.log(arr[0]);
// agar mujhe array mein store kiye hue function call karna hein yha phir invoke karna hein
// arr[0]();
// arr[1]();
// function k refrence ko copy kar k ushe call bhi kar sakte hein
// function greet() {
//   console.log("welcome");
// }

// let a = greet;
// let b = a;
// b();
//functions mein yeah saare behaviour ko dekh kar
//Js mein functions ko hum first-class-citizen kehte hein

function absent() {
  console.log("student absent");
}

function present() {
  console.log("student present");
}

function checkStudentAttendance(callback) {
  console.log("checking attendance...");
  callback();
}
// Internally present() hi call ho raha hein

checkStudentAttendance(present);

// Jab bhi kisi function k andar ek function ko as an argument pass kiya jaye toh use hum callback function kehte hein

// HOF -> Higher Order Function
// jab bhi ek function dusre function ko parameter mein accept karta hein ushe hum HOF kehte hein

// present -> callback function
//checkStudentAttendance -> HOF

function success() {
  console.log("valid OTP");
}
function failed() {
  console.log("Invalid OTP");
}

function checkOTP(check, cb1, cb2) {
  if (check) {
    cb1();
  } else {
    cb2();
  }
}

checkOTP(false, success, failed);

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operation) {
  console.log(operation(a, b));
}

calculator(10, 20, add);
calculator(10, 20, sub);
calculator(10, 20, mul);
calculator(10, 20, divide);
