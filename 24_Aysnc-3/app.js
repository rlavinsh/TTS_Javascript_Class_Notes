//https://randomuser.me/api/
// let userName = document.getElementById("username");
// let btn = document.getElementById("btn");

// function getData() {
//   fetch(`https://randomuser.me/api/`)
//     .then((rawData) => {
//       return rawData.json();
//     })
//     .then((response) => {
//       console.log(response.results[0].login.username);
//       let user = response.results[0].login.username;
//       userName.innerText = user;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// btn.addEventListener("click", getData);
// let data = fetch(`https://randomuser.me/api/`);
// console.log(data);

// function getData() {
//   return new Promise((resolve, reject) => {
//     let age = 19;
//     if (age > 18) {
//       resolve("Eligible");
//     } else {
//       reject("Eligible");
//     }
//   });
// }

// console.log(getData());

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function loginUser(userId, userName) {
  console.log("User login ho raha hein...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: userId, userName: userName });
    }, 2000);
  });
}

function getPost(userId) {
  console.log("Post fetch ki ja rahi hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ postId: "1001", title: "Toxic" }]);
    }, 2000);
  });
}

let commentData = [
  { commentId: "1002", text: "Bakwaas" },
  { commentId: "1003", text: "Good" },
];

function getAllComments(postId) {
  console.log("saare comments fetch ho rahe hein");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(commentData);
    }, 4000);
  });
}
function getSingleComment(comment, cb) {
  console.log("single comment fetch ho raha hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comment);
    }, 3000);
  });
}

loginUser("101", "Rohit")
  .then((userData) => {
    console.log(userData);
    console.log("User login ho gaya hein");
    return getPost(userData.userId);
  })
  .then((allPost) => {
    console.log(allPost);
    console.log("sabhi post aa gayi hein");
    return getAllComments(allPost[0].postId);
  })
  .then((allComments) => {
    console.log(allComments);
    console.log("sabhi comments aa gaye hein");
    return getSingleComment(allComments[0].text);
  })
  .then((singleComment) => {
    console.log(singleComment);
    console.log("single comment bhi aa gaya");
  });
