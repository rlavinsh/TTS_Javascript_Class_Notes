// let studentName = "shivam";
// let studentAge = 25;
// let studentEmail = "student@gmail.com";

// let student = {
//   studentName: "shivam",
//   studentAge: 25,
//   studentEmail: "student@gmail.com",
// };

// access karna hein studentAge
// syntax: ObjectName.key
// console.log(student.studentAge);

// Age ko modify karna hein
// console.log(student);

// student.studentAge = 30;
// console.log(student);

// adding the property
// console.log(student);
// student.course = "MERN";
// console.log(student);
// delete
// syntax: delete ObjectName.property
// delete student.course
// console.log(student);

/**
 * Name email age RollNumber city and state
 */
// let user = {
//   "user-Name": "Rohan",
//   userAge: 30,
//   city: "Bhopal",
// };
// let target = "user-Name";
// console.log(user.target);
// console.log(user[target]);

// console.log(user["user-Name"]);
// // Modify karna hein
// user["user-Name"] = "Ritik"
// console.log(user);

// let student = {
//   studentName: "shivam",
//   studentAge: 25,
//   studentEmail: "student@gmail.com",
//   greet: function () {
//     console.log(`Hello ${this.studentName}`);
//   },
// };

// student.greet();

// ES6 Shortand
// let student = {
//   studentName: "shivam",
//   studentAge: 25,
//   studentEmail: "student@gmail.com",
//   sayHello() {
//     console.log(`Hello ${this.studentName}`);
//   },
// };

// student.sayHello();
// Arrow Function
// let student = {
//   studentName: "shivam",
//   studentAge: 25,
//   studentEmail: "student@gmail.com",
//   greet: () => {
//     console.log(`Hello ${this.studentName}`);
//   },
// };

// student.greet();

let student = {
  studentName: "shivam",
  studentAge: 25,
  studentEmail: "student@gmail.com",
};
// without destructuring
console.log(student.studentName);
console.log(student.studentAge);
console.log(student.studentEmail);

// with destructuring
let { studentName, studentAge, studentEmail } = student;
console.log("===========================");
console.log(studentName);
console.log(studentAge);
console.log(studentEmail);
