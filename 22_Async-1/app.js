// console.log("orderering pizza");
// console.log("Order Placed");
// console.log("Pizza Ready ho raha"); // 5
// console.log("Pizza Deliver ho raha hein"); // 10
// console.log("enjoy pizza");

// console.log("orderering pizza");
// console.log("Order Placed");
// setTimeout(() => {
//   console.log("Pizza Ready ho raha");
// }, 0);

// setTimeout(() => {
//   console.log("Pizza Deliver ho raha hein");
// }, 0);

// console.log("enjoy pizza");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// let btn = document.querySelector("#btn");
// // console.log(btn);

// btn.addEventListener("click", () => {
//   clearInterval(id);
// });

// let id = setInterval(() => {
//   console.log("hello");
// }, 2000);

// function greet(name, cb) {
//   console.log(`hello ${name}`);
//   cb()
// }

// function sayBye() {
//   console.log("Bye Bye!");
// }

// greet("Rohan", sayBye);

// setTimeout(() => {
//   console.log("orderering pizza");
//   setTimeout(() => {
//     console.log("Order Placed");
//     setTimeout(() => {
//       console.log("Pizza Ready ho raha");
//       setTimeout(() => {
//         console.log("Pizza Deliver ho raha hein");
//         setTimeout(() => {
//           console.log("enjoy pizza");
//         }, 5000);
//       }, 4000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Instagram par user gaya
// sabse pehle login karenge
// single post ko nikalenge
//ish post k comments fetch karenge
//single comment nikalenge

function loginUser(userId, userName, cb) {
  console.log("User login ho raha hein...");
  setTimeout(() => {
    cb({ userId: userId, userName: userName });
  }, 2000);
}

function getPost(userId, cb) {
  console.log("Post fetch ki ja rahi hein");
  setTimeout(() => {
    cb([{ postId: "1001", title: "Toxic" }]);
  }, 2000);
}

let commentData = [
  { commentId: "1002", text: "Bakwaas" },
  { commentId: "1003", text: "Good" },
];

function getAllComments(postId, cb) {
  console.log("saare comments fetch ho rahe hein");

  setTimeout(() => {
    cb(commentData);
  }, 4000);
}
function getSingleComment(comment, cb) {
  console.log("single comment fetch ho raha hein");
  setTimeout(() => {
    cb(comment);
  }, 3000);
}

// loginUser("101", "Rohit", (userData) => {
//   console.log(userData);
//   console.log("User login ho gaya hein");
//   getPost(userData.userId, (allPost) => {
//     console.log(allPost);
//     console.log("sabhi post aa gayi hein");
//     getAllComments(allPost[0].postId, (allComments) => {
//       console.log(allComments);
//       console.log("sabhi comments aa gaye hein");
//       getSingleComment(allComments[0].text, (singleComment) => {
//         console.log(singleComment);
//         console.log("single comment bhi aa gaya");
//       });
//     });
//   });
// });

// placeOrder
// pizzSendToKitchen
// pizzaReady
// pizzaBake
// pizzaDeliver

function placeOrder(pizzaName, cb) {
  console.log(`${pizzaName} pizza order ho raha hein`);
  setTimeout(() => {
    console.log(`${pizzaName} pizza order ho gaya hein`);
    cb(pizzaName);
  }, 3000);
}

function pizzSendToKitchen(pizzaName, cb) {
  console.log(`${pizzaName} pizza kitchen mein bheja gaya hein`);
  setTimeout(() => {
    console.log(`${pizzaName} pizza kitchen mein aa gaya hein`);
    cb(pizzaName);
  }, 2000);
}

function pizzaReady() {}

placeOrder("Farmhouse", (pizzaName) => {
  // console.log(pizzaName);
  pizzSendToKitchen(pizzaName, (pizzaName) => {
    // console.log(pizzaName);
  });
});
