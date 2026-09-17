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

// const user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("user aa gaya");
//   }, 1000);
// });

// const post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("post aa gayi");
//     // reject("Post nahi hein");
//   }, 2000);
// });

// const comments = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("comments aa gaye");
//   }, 5000);
// });

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

// Promise.any([user, post, comments])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const emails = [
  "abc@gmail.com",
  "hello@gmail.com",
  "ankit@gmail.com",
  "rahul@gmail.com",
  "rohan@gmail.com",
];

function sendEmail(useremail) {
  // console.log(`Processing email....`);
  const score = Math.floor(Math.random() * 100);
  // console.log(`User cibil score${score}`);
  return new Promise((resolve, reject) => {
    if (score > 50) {
      resolve({
        email: useremail,
        cibilscore: score,
        message: "Email chala gaya",
      });
    } else {
      reject({
        email: useremail,
        cibilscore: score,
        message: "Email nahi gaya",
      });
    }
  });
}

const allEmails = emails.map((email) => {
  return sendEmail(email);
});

Promise.allSettled(allEmails)
  .then((emails) => {
    let sent = 0;
    let fail = 0;
    emails.forEach((email, index) => {
      // console.log(email);

      if (email.status === "fulfilled") {
        sent++;
        console.log(
          `id: ${index} || email:${email.value.email} || cibilScore: ${email.value.cibilscore} || message: ${email.value.message}`,
        );
      } else {
        fail++;
        console.log(
          `id: ${index} || email:${email.reason.email} || cibilScore: ${email.reason.cibilscore} || message: ${email.reason.message}`,
        );
      }
      // console.log(email);
    });
    console.log("===============Final Report==============");
    console.log(`total emails: ${emails.length}`);
    console.log(`sent Email ${sent}`);
    console.log(`Failed Email ${fail}`);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * Expected Output
 *
 * id | email | score | message
 *
 * Total email ->
 * Email sent ->
 * Failed Email ->
 */
