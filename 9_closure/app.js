// function greet() {
//   let a = 10;
// }
// greet();
// console.log(a);

// let a = 10;
// function one() {
//   let b = 20;
//   function two() {
//     let c = 30;
//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }
//   two()
// }
// one()

// function greet(){
//     let a = 10;
//     function Inner(){
//         console.log(a);
//     }
//     return Inner;
// }

// let result = greet()
// result()

// console.log(result);

// function one() {
//   let a = 10;
//   function two() {
//     console.log(a);
//   }
//   two();
// }
// one();

// function counter() {
//   let count = 0;
//   function Inner() {
//     count++;
//     console.log(count);
//   }
//   Inner();
// }
// counter()
// counter()
// counter()

function cart() {
  let total = 0;
  return function (price) {
    total += price;
    console.log(total);
  };
}

let cartA = cart();
cartA(100);
cartA(200);
cartA(400);

console.log("=================Cart B total============");

let cartB = cart();
cartB(500);
cartB(1000);



