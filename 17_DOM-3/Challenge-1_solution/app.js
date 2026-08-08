const employees = [
  {
    name: "Rahul Sharma",
    department: "Development",
    salary: 45000,
  },
  {
    name: "Priya Verma",
    department: "HR",
    salary: 35000,
  },
  {
    name: "Aman Singh",
    department: "Testing",
    salary: 40000,
  },
  {
    name: "Neha Gupta",
    department: "Marketing",
    salary: 38000,
  },
];

let employeeList = document.querySelector("#employee-list");

employees.forEach((emp) => {
  const div = document.createElement("div");
  //   console.log(div);
  const heading = document.createElement("h2");
  heading.innerText = `${emp.name}`;
  div.append(heading);
  //   console.log(div);

  const para = document.createElement("p");
  para.innerText = `Department: ${emp.department}`;
  div.append(para);
  const paraSal = document.createElement("p");
  paraSal.innerText = `Salary: ${emp.salary}`;
  div.append(paraSal);
  console.log(div);

  employeeList.append(div);
});
