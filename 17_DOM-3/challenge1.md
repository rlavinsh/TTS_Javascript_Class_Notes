<!DOCTYPE html>
<html lang="en">
<head>
    <title>Employee Directory</title>
</head>
<body>

    <h1>Employees</h1>

    <div id="employee-list"></div>

</body>
</html>

const employees = [
    {
        name: "Rahul Sharma",
        department: "Development",
        salary: 45000
    },
    {
        name: "Priya Verma",
        department: "HR",
        salary: 35000
    },
    {
        name: "Aman Singh",
        department: "Testing",
        salary: 40000
    },
    {
        name: "Neha Gupta",
        department: "Marketing",
        salary: 38000
    }
];

Your Task

Select the employee-list div.
Loop through the employees array.
For every employee create one <div>.
Inside that div create
one <h2> for employee name
one <p> for department
one <p> for salary
Add all the content using innerText only.
Append every employee card inside employee-list.
After all employee cards are added.

Expected Output
Employees

Rahul Sharma
Department : Development
Salary : ₹45000



Priya Verma
Department : HR
Salary : ₹35000



Aman Singh
Department : Testing
Salary : ₹40000



Neha Gupta
Department : Marketing
Salary : ₹38000
