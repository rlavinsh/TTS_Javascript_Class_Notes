// const api = "https://api.github.com/users/";
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});
console.log("3");
