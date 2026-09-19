// async and await

// function getData() {
//   return new Promise((resolve, reject) => {
//     resolve("Data aa gaya");
//   });
// }

// getData().then((result) => {
//   console.log(result);
// })

// async function gettingData() {
//   const data = await getData();
//   console.log(data);
// }

// gettingData();

// let data = fetch(`https://jsonplaceholder.typicode.com/todos/`);
// // console.log(data);
// data
//   .then((rawData) => {
//     //   console.log(rawData);
//     return rawData.json();
//   })
//   .then((actualData) => {
//     console.log(actualData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getData() {
//   try {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
//     const result = await data.json();
//     const actualData = result;
//     console.log(actualData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData();

// function loginUser(userId, userName) {
//   console.log("User login ho raha hein...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ userId: userId, userName: userName });
//     }, 2000);
//   });
// }

// function getPost(userId) {
//   console.log("Post fetch ki ja rahi hein");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{ postId: "1001", title: "Toxic" }]);
//     }, 2000);
//   });
// }

// let commentData = [
//   { commentId: "1002", text: "Bakwaas" },
//   { commentId: "1003", text: "Good" },
// ];

// function getAllComments(postId) {
//   console.log("saare comments fetch ho rahe hein");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(commentData);
//     }, 4000);
//   });
// }
// function getSingleComment(comment, cb) {
//   console.log("single comment fetch ho raha hein");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(comment);
//     }, 3000);
//   });
// }

// loginUser("101", "Rohit")
//   .then((userData) => {
//     console.log(userData);
//     console.log("User login ho gaya hein");
//     return getPost(userData.userId);
//   })
//   .then((allPost) => {
//     console.log(allPost);
//     console.log("sabhi post aa gayi hein");
//     return getAllComments(allPost[0].postId);
//   })
//   .then((allComments) => {
//     console.log(allComments);
//     console.log("sabhi comments aa gaye hein");
//     return getSingleComment(allComments[0].text);
//   })
//   .then((singleComment) => {
//     console.log(singleComment);
//     console.log("single comment bhi aa gaya");
//   });

// async function gettingData() {
//   const user = await loginUser("101", "Rohit");
//   const post = await getPost(user.userId);
//   const allComments = await getAllComments(post[0].postId);
//   const singleComment = await getSingleComment(allComments[0].text);
//   console.log(singleComment);
// }

// gettingData();

let btn = document.getElementById("btn");
let loading = document.getElementById("loading");
let container = document.getElementById("container");

btn.addEventListener("click", async () => {
  try {
    loading.innerText = "Loading....";

    let data = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!data.ok) {
      throw new Error("something went wrong");
    }

    container.innerHTML = "";

    const results = await data.json();
    results.forEach((user) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.innerHTML = `<h1>${user.name}</h1>
                       <p> ${user.email}</p>   `;
      container.append(card);
    });

    // console.log(results);
  } catch (err) {
    container.innerHTML = `<h1>Something went wrong</h1>`;
    console.log(err);
  } finally {
    loading.innerText = "";
    btn.style.display = "none";
  }
});
