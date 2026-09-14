// const prm = new Promise((resolve, reject) => {
//   //   reject("promise reject hua hein");
// let age = 15;
//   if (age < 18) {
//     reject("Not Eligible");
//   } else {
//     resolve("Eligible");
//   }
// });

// prm
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// id: codingthinker123@gmail.com
//Password: Coding@9876

// console.log(prm);

let data = fetch(`https://jsonplaceholder.typicode.com/todos/`);
// console.log(data);
data
  .then((rawData) => {
    //   console.log(rawData);
    return rawData.json();
  })
  .then((actualData) => {
    // console.log(actualData);
    return actualData[4].id;
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
