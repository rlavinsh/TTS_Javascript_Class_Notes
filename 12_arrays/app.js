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
let arr = [10, 20, 30, 40];
arr.fill("hello", 0, 2);
console.log(arr);
