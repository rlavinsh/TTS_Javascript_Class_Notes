// variableName ArrayName = []
// let animals = ["lion", "tiger", "bear", "dog"];

// mujhe agar kisi bhi value ko access karna hein for that I am using indexs
// Index always start from 0
// let arrayName = []
// mixed array
// let arr1 = [1, "hello", true];
// console.log(arr1[1]);

// let newName = animals[1];
// console.log(newName);
// console.log(animals);

// Array Methods
// ArrayName.push()
// console.log(animals);
//push add the value in the last of the array
// animals.push("cat");
// console.log(animals);
// animals.unshift("cat");
// unshift() se hum starting mein value add kar sakte hein
// console.log(animals);
// animals.pop();
// console.log(animals);

// pop method is used to delete the value from last
// console.log(`after delete`, animals);

// shift() yeah use hota hein 0th index se value delete karne k liye
// animals.shift();
// console.log(animals);

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// mujhe in sabhi ko ek single array mein lana hein
//concat()
// let combineAll = arr1.concat(arr2, arr3);
// console.log(combineAll);

// let fruits = ["apple", "mango", "grapes", "kiwi", "mango"];
// agar mujhe yeah check karna hein ki kiwi ish mein yha nahi
// includes()
//Syntax- ArrayName.includes("Element")
// let result = fruits.includes("mango", 1);
// console.log(result);
//Syntax- ArrayName.includes("Element", "Index")

// Agar Mujhe index nikalna hein ki fruits konse index par hein
// indexOf()
// If the condition match then it will return the index
// Otherwise it will return -1
// let findIndex = fruits.indexOf("mango");
// console.log(findIndex);

// let findIndex = fruits.lastIndexOf("mango");
// console.log(findIndex);

// let arr = [10, 20, 30, 40];
// Mujhe inh array elements ko reverse order mein print karna hein
//reverse()
// let newArr = arr.reverse();
// console.log(newArr);

// const arr = ["F", "C", "E", "D", "M"];
// jab bhi app array ko sort karoge toh yaad rakhna ki uske andar ek comparator function pass karna hein
//if you want result in ascending order then use (a-b)
// if you want result in descending order then use(b-a)
// const arr = [100, 50, 65, 86];
// let newArr = arr.sort((a, b) => a - b); // ascending order
// let newArr = arr.sort((a, b) => {
//     return b - a
// }); // descending order
// console.log(newArr);

// let fruits = ["apple", "mango", "grapes", "kiwi", "mango"];

// agar mujhe mango se kiwi tak ka aaray chaiye
// syntax - ArrayName.slice(startIndex,EndIndex)
// original array remain same
// let newArr = fruits.slice(1, 4);
// console.log(newArr);

// splice("StartingIndex","count")
// let fruits = ["apple", "mango", "grapes", "kiwi", "mango"];
// yeah bas array k elements ko delte kar raha hein
// fruits.splice(1, 2);
// fruits.splice(1, 0, "orange", "pineapple");
// fruits.splice(4, 2);
// console.log(fruits);

// fill("value","startIndex","endIndex")
// let arr = [10, 20, 30, 40];
// arr.fill("hello", 0, 2);
// console.log(arr);

let students = ["Rahul", "Aman", "Rohit", "Priya", "Neha"];
// 1. Display the total number of students.
let totalStudents = students.length;
console.log(totalStudents);
// 2. Add "Vivek" at the end.
students.push("Vivek");
console.log(students);
// 3. Add "Karan" at the beginning.
students.unshift("Karan");
console.log(students);
// 4. Remove the last student.
students.pop();
console.log(students);
// 5. Remove the first student.
students.shift();
console.log(students);
// 6. Check whether "Rahul" exists or not.
let isRahulPresent = students.includes("Rahul");
if (isRahulPresent) {
  console.log("Rahul Present");
} else {
  console.log("Rahul Not Present");
}
// 7. Find the index of "Priya".
let idx = students.indexOf("Priya");
console.log(`priya present on index ${idx}`);

// 8. Find the last index of "Rahul"
let lastidx = students.lastIndexOf("Rahul");
console.log(`Rahul present on idx ${lastidx}`);
// 9. Create a copy of only the first 3 students.
let newArr = students.slice(0, 3);
console.log(newArr);

// 10. Replace "Aman" with "Ankit" using splice().
let amanIndex = students.indexOf("Aman");
if (amanIndex !== -1) {
  students.splice(amanIndex, 1, "Ankit");
}
console.log(students);

// 11. Reverse the original array.
students.reverse();
console.log(students);

// 12. Join all student names using " | ".
let joinArray = students.join(" | ");
console.log(joinArray);

const arr1 = [10, 20, 30, 40];
// slice(startingIndex,endingIndex)
// statingIndex -> Inclusive
// endingIndex -> Exclusive

// let someArr = arr1.slice(0, 3);
// console.log(someArr);

// splice -> yeah original array ko change karta hein
//splice(startingIndex,deletecount,"data1","data2")
// arr1.splice(1, 2, 50, "hello");
// console.log(arr1);

/*
let inventory = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Mouse",
  "Printer",
  "CPU",
  "Speaker"
];

1. Print the total number of products available in the inventory.
2. Add "Webcam" at the end of the inventory.
3. Add "Router" at the beginning of the inventory.
4. The first product has been sold.Remove it from the inventory.
5. The last product is out of stock.Remove it from the inventory.
6. Check whether "Printer" is available in the inventory or not.

If available, print:

Printer is available

Otherwise print:

Printer is not available

7. Find the first and last occurrence of "Mouse".
   Print both indexes.

8. Create a backup array containing products from index 2 to index 5.

Print the backup array.

9. The company has replaced "Keyboard" and "Monitor" with "SSD" and "RAM".

Perform this operation using only splice()

10. A new product "Projector" has arrived.

Insert it after "RAM" without removing any existing product.

11. Reverse the inventory.

Print the updated inventory

12. Display the inventory in the following format:

CPU -> Printer -> Mouse -> RAM -> SSD -> Laptop

Use only one array method.

13. Predict the output without running the code.

inventory.copyWithin(2, 0, 3);
console.log(inventory);

14. Predict the output.

inventory.fill("Out of Stock", 3, 6);
console.log(inventory);

15. Without creating another array,

replace the last two products with:

Camera
Microphone
*/


