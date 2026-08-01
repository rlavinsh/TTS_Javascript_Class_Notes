let arr = [23, 56, 101, 85, 14];

// forEach
//syntax forEach(callback fn)
// forEach kuch bhi return nahi karta hein

// let result1 = arr.forEach((val) => {
//   //   console.log(index, val);
//   //   console.log(val * 2);
//   return val;
// });
// console.log(result1);

// console.log("===========using Map==========");

//map
// syntax: arrayName.map(fn)
// yeah apke pass ek array return karta hein
// jab bhi hum values and array ko transform karna chahte hein
// let result2 = arr.map((val, index) => {
//   //   console.log(index, val * 2);
//   return val;
// });

// console.log(result2);

// filter
// yeah bhi apke pass ek array return kar k deta hein
// original array change nahi hota hein
// let data = arr.filter((val) => {
//   return val > 50;
// });
// console.log(arr);

// console.log(data);

// reduce
// yeah apko return karega ek single value
// combine the whole result in a single value
// let result = arr.reduce((acc, currValue) => {
//   acc = acc + currValue;
//   return acc;
// }, 0);
// console.log(result);

// let users = [
//   { id: 1, firstName: "Rahul", salary: 1000 },
//   { id: 2, firstName: "Rohit", salary: 4000 },
//   { id: 3, firstName: "Rohit", salary: 8000 },
// ];

// eshe user ko nikalo jiski salary 2000 se jayda hein and sath mein hi yeah batana ki totalSalary kitni ho rahi hein

// Expected output : 12000
// let totalSalary = user
//   .filter((val) => {
//     return val.salary > 2000;
//   })
//   .reduce((acc, currVal) => {
//     acc = acc + currVal.salary;
//     return acc;
//   }, 0);
// console.log(totalSalary);

// let filterUsers = users
//   .filter((val) => {
//     return val.salary > 2000;
//   })
//   .map((item) => {
//     return item.firstName;
//   });
// console.log(filterUsers);

// find()
// isko jaise hi true condition hit ho jati hein yeah wahi se apko return kar k de deta hein
// yeah apko ek object return kar k deta hein
// let data = users.find((val) => {
//   return val.firstName === "Rohit";
// });
// console.log(data);

// findIndex()
//agar condition match hoti hein toh return karege Index otherwise return kar dega -1
// let data = users.findIndex((val) => {
//   return val.firstName === "Rohit";
// });
// console.log(data);

// some()
// iska result humein boolean values mein milta hein
// ki koi bhi ek condition true ho

// let result = arr.some((val) => {
//   return val > 100;
// });

// console.log(result);

// every()
// yeah true tabhi dega jab har ek condition satisfy hogi
// agar ek bhi false hui toh yeah apko return kar dega false
// let arr1 = [102, 101, 106, 110];
// let result = arr1.every((val) => {
//   return val > 100;
// });

// console.log(result);

const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 45000,
    age: 24,
    experience: 2,
    active: true,
  },
  {
    id: 2,
    name: "Aman",
    department: "HR",
    salary: 35000,
    age: 28,
    experience: 5,
    active: false,
  },
  {
    id: 3,
    name: "Neha",
    department: "IT",
    salary: 60000,
    age: 30,
    experience: 7,
    active: true,
  },
  {
    id: 4,
    name: "Priya",
    department: "Sales",
    salary: 40000,
    age: 26,
    experience: 3,
    active: true,
  },
  {
    id: 5,
    name: "Rohit",
    department: "Finance",
    salary: 70000,
    age: 35,
    experience: 10,
    active: false,
  },
];

// Print all employee names using forEach.
// employees.forEach((val) => {
//   console.log(val.name);
// });
// Create an array of only employee names using map.
// let empName = employees.map((val) => {
//   // console.log(val.name)
//   return val.name;
// });
// console.log(empName);

// Create an array of only salaries using map.
// let empSal = employees.map((val) => {
//   return val.salary;
// });
// console.log(empSal);

// Find all active employees using filter.
// let activeEmp = employees.filter((val) => {
//   return val.active;
// });
// console.log(activeEmp);

// let activeEmp1 = activeEmp.map((val) => {
//   return val.name;
// });
// console.log(activeEmp1);

// Find employees whose salary is greater than 50000.
// let salaries = employees.filter((val) => {
//   return val.salary > 50000;
// });
// console.log(salaries);

// Find the employee whose id is 4.
// let result = employees.find((val) => {
//   return val.id === 4;
// });
// console.log(result);

// Find the index of employee "Neha".
// let result = employees.findIndex((val) => {
//   return val.name === "Neha";
// });
// console.log(result);

// Check if any employee belongs to the "Finance" department.
// let result = employees.some((val) => {
//   return val.department === "Finance";
// });
// console.log(result);

// Check whether all employees are active.
// let result = employees.every((val) => {
//   return val.active;
// });
// console.log(result);

// Calculate the total salary of all employees.
// let totalSal = employees.reduce((acc, currVal) => {
//   acc = acc + currVal.salary;
//   return acc;
// }, 0);
// console.log(totalSal);

// Calculate the average salary using reduce.

// let avgsalary = employees.reduce((acc, curr) => {
//   acc += curr.salary;
//   return acc;
// }, 0);
// console.log(avgsalary / employees.length);
// Find the highest salary using reduce.
// Create a new array where every employee gets a 10% salary hike without modifying the original array.
let newArr = employees
  .map((sal) => {
    return sal.salary;
  })
  .map((val) => {
    return val * 1.1;
  });
console.log(newArr);
// Find the total salary of only active employees.
// let activeEmpSalary=employees.filter((val)=>{
//   return val.active;
// }).reduce((acc,currentVal)=>{
//   acc=acc+currentVal.salary;
//   return acc;
// },0)
// console.log(activeEmpSalary);
// Find the names of all employees whose experience is greater than 3 years.

// let result = employees
//   .filter((val) => {
//     return val.experience > 3;
//   })
//   .map((val) => {
//     return val.name;
//   });

// console.log(result);
// Check whether every IT employee has a salary greater than 40000.
// Check if there is any inactive employee earning more than 60000.
// Find the first active employee from the IT department.
