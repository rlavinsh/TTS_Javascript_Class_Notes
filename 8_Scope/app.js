// Global Scope
// Functional Scope
// Block Scope
// Modular Scope

// let a = 10; // Global level

// function abc() {
//   console.log(a);
// }

// abc();
// let a = 10;
// function greet() {
//   console.log(a);
// }

// greet();

// function greet() {
//   var age = 20;
//   console.log(age);
// }

// function greet() {
//   let age = 20;
//   console.log(age);
// }

// function greet() {
//   const age = 20;
//   console.log(age);
// }
// greet();
// console.log(age); // humein error aati hein kyu ki function k andar jo bhi variable declare karenge ushe wahi par access kar sakte hein outside function access nahi kar sakte hein or na hi kisi dusre function mein

// Block level - var isko respect nahi karta hein  aur let and const eshe respect dete hein var mein humein value mil jati hein and let const meine error aati hein
// {
//   var age = 20;
// }

// console.log(age); //20

// var age = 20

// if (true) {
//   let a = 50;
// }
// console.log(a);

// var -> output milta hein block level mein
// let and const -> error aati hein

// function abc() {
//   let a = 10;
// }
// console.log(a);

// {
//   var a = 10;
// }
// console.log(a);

// scope chaining
// let b = 30;
// function one() {
//   // let b = 20;
//   function two() {
//     let c = 50;
//     console.log(c);
//     console.log(b);
//   }
//   two();
// }
// one();

// let a = 30;
// function one() {
//   let b = 20;
//   function two() {
//     let c = 50;
//     console.log(a + b + c);
//   }
//   two();
// }
// one();
// scope chaining ka example nahi hein
// let city = "bhopal";
// function greet(){
//   let city1 = "Indore"
//   function greet1(){
//     let city2 = "Gwalior"
//     console.log(city2);
//   }

//   greet1()

// }
// greet()

// Variable shadowing : same name se Inner varibale and outer variable defined ho and outer varibale ko hum temprory hide kar dete hein ushi ko variable shadowing kehte hein

// let city = "Bhopal";
// function cityName() {
//   let city = "Indore";
//   console.log(city);
// }
// cityName();
// console.log(city);

// let a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

