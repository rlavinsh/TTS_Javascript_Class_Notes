// syntax
//  function functionName(){
//     // code
//  }

// function greet() {
//   console.log("Hello students");
// }

// greet()
// let num1 = 100;
// let num2 = 200;
// let sum = num1 + num2;
// console.log(sum);

// let num3 = 65;
// let num4 = 56;

// let result1 = num3 + num4;
// console.log(result1);

// function calculateSum(num1, num2) {
//   // num1 and num2 yeah apke parameters hein
//   let sum = num1 + num2;
//   console.log(sum);
// }

// calculateSum(100, 200); // arguments 100 and 200 arguments hein
// calculateSum(65, 56);

// Default Parametrs
// function calculateSum(num1 = 10, num2 = 30) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// calculateSum();
// calculateSum(50);
// calculateSum(50, 40);
// calculateSum(undefined, 50);
// calculateSum(undefined);

// Return Keyword

// function calculateSum(num1, num2) {
//   console.log("we are adding the two Numbers");
//   console.log(num1, num2);
//   return num1 + num2;
//   return num1; // Ignore
//   return num2; // Ignore
// }
// console.log(calculateSum(10,15)); // esha maat karna

// let res = calculateSum(10, 15);
// console.log(res);

// function getUserDetail() {
//   let user = {
//     name: "john",
//     age: 25,
//     email: "john@gmail.com",
//     city: "Bhopal",
//   };
//   return user;
// }

// let userData = getUserDetail();
// console.log(userData);

// console.log(console.log("hello"));

// How to convert function declaration into function expression
// Function  Expression
// let greet = function () {
//   console.log("Hello students");
// };

// greet()

// Make Function Expression
// let calculateSum = function (num1, num2) {
//   // num1 and num2 yeah apke parameters hein
//   let sum = num1 + num2;
//   console.log(sum);
// };

// calculateSum(15, 16);

// How to convert function expression to Arrow Function
// let greet = () => {
//   console.log("Hello students");
// };
// greet();

// Arrow Function
// let calculateSum = (num1, num2) => {
//   // num1 and num2 yeah apke parameters hein
//   let sum = num1 + num2;
//   console.log(sum);
// };

// calculateSum(15, 16);
// console.log("=========Short Arrow Function===========================");

// let calculateSum1 = (num1, num2) => num1 + num2;
// let calculateSum1 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(calculateSum1(15, 25));

// Calculate the square of a number
// let square = (val) => val * val;
// console.log(square(5));

function getStudentReport(eng, math, science, hindi, sanskrit) {
  let attence = 90;
  let total = eng + math + science + hindi + sanskrit;
  let percentage = (total / 500) * 100;
  return { attence, percentage, total };
}

let studentReport = getStudentReport(90, 80, 70, 60, 50);
console.log("total marks: ", studentReport.total);
console.log("attendance: ", studentReport.attence);
console.log("percentage: ", studentReport.percentage);
