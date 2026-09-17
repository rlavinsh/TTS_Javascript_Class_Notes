// Customer ki email receive karni hai.
// Randomly 1–100 ke beech customer score generate karna hai.
// Agar score 50 ya usse zyada hai:
// Email successfully send karni hai.
// Promise resolve() hona chahiye.
// Agar score 50 se kam hai:
// Email send nahi karni.
// Promise reject() hona chahiye.
// Result ko .then() aur .catch() se handle karna hai.
// finally() mein processing complete hone ka message dikhana hai.

// function sendEmail(useremail) {
//   console.log(`Processing email....`);
//   const score = Math.floor(Math.random() * 100);
//   console.log(`User cibil score${score}`);
//   return new Promise((resolve, reject) => {
//     if (score > 50) {
//       resolve("Email sent");
//     } else {
//       reject("Email Failed");
//     }
//   });
// }

// sendEmail("abc@gmail.com")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise API

const user = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("user aa gaya");
  }, 1000);
});

const post = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("post aa gayi");
    // reject("Post nahi hein");
  }, 2000);
});

const comments = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("comments aa gaye");
  }, 5000);
});

// Promise.all([user, post, comments])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([user, post, comments])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([user, post, comments])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.any([user, post, comments])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
