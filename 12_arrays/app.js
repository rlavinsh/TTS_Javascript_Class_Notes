// variableName ArrayName = []
let animals = ["lion", "tiger", "bear", "dog"];

// mujhe agar kisi bhi value ko access karna hein for that I am using indexs
// Index always start from 0

// mixed array
// let arr1 = [1, "hello", true];
// console.log(arr1);

// let newName = animals[1];
// console.log(newName);

// Array Methods
// ArrayName.push()
// console.log(animals);
//push add the value in the last of the array
// animals.push("cat");
console.log(animals);
animals.unshift("cat");
// unshift() se hum starting mein value add kar sakte hein
console.log(animals);
// animals.pop();
// pop method is used to delete the value from last
// console.log(`after delete`, animals);

// shift() yeah use hota hein 0th index se value delete karne k liye
animals.shift();
console.log(animals);
