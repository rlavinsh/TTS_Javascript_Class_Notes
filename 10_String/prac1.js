// let str = "     JavaScript     ";
//Remove the extra spaces from both sides and print the result.
// let res = str.trim();
// console.log(res);

// let str = "coding thinker";
// Convert the string into uppercase and print it.
// let res = str.toUpperCase();
// console.log(res);

// let str = "JavaScript";
// Print the total number of characters in the string.

// let str = "Programming";
//Print the first character and the last character.
// console.log(str.charAt(0));
// console.log(str.charAt(str.length - 1));

// console.log("========================");
// console.log(str.at(0));
// console.log(str.at(str.length - 1));

// let email = "student@gmail.com";
// let check = email.includes("@");
// if (check) {
//   console.log("Valid email");
// } else {
//   console.log("Invalid email");
// }

/**
 Check whether the email contains "@".

If yes, print:

Valid Email

Otherwise print:

Invalid Email
 */

// let message = "Good Morning Everyone";
//Check whether the string starts with "Good".

// let fileName = "resume.pdf";
// Check whether the file is a PDF.

// let sentence = "I love Java";
// Replace "Java" with "JavaScript".
// let res = sentence.replace("Java", "JavaScript");
// console.log(res);

// let sentence = "cat dog cat bird cat";
// Replace every "cat" with "lion".

// let email = "demo@gmail.com";
/**
 Extract only the username.

Expected Output

demo
 */

// let email = "lavinsh@gmail.com";

/**
 Extract only the domain name.

Expected Output

gmail.com
 */

// let fruits = "Apple,Mango,Banana,Grapes";
// Convert the string into an array

// let sentence = "I love JavaScript very much";
//Count the total number of spaces
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence.charAt(i) === " ") {
//     count++;
//   }
// }
// console.log(`Total Spaces are ${count}`);

// let str = "JavaScript";
//Reverse the string without using reverse().

// let rev = "";
// for (let i = str.length - 1; i > 0; i--) {
//   rev += str.charAt(i);
// }
// console.log(rev);

// let naam = "lavinsh";
/**
 Convert the first character into uppercase.

Expected Output

Lavinsh
 */

let str = "JavaScript Programming";
// Count the total number of vowels.
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i);
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(`Total vowels are ${count}`);

// let str = "programming";
// Count how many times "g" appears.

// let title = "Learn JavaScript Basics";
/*
Convert it into

learn-javascript-basics
*/

// let sentence = "JavaScript is an amazing programming language";

//Find and print the longest word from the sentence.

// let str = "madam";
// Check whether the string is a palindrome.

// let sentence = "Welcome to Geeks Of Gurukul";
//Print the total number of words.

// let sentence = "Java Script Is Awesome";
// Remove all spaces from the string.

// let sentence = "I am learning JavaScript";
// Find the index of "Java".

// let str = "javascript";
//Check whether all characters are in lowercase.
