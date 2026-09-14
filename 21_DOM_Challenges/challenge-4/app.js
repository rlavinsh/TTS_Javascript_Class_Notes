const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive not to be a success, but rather to be of value.",
  "The only way to do great work is to love what you do.",
  "Don't count the days, make the days count.",
  "In the middle of difficulty lies opportunity.",
  "You miss 100% of the shots you don't take.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow is our doubts of today.",
];
let quote = document.querySelector("#quote");
// quote.innerText = "hello";
let generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[idx];
});
