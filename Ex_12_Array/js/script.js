let numbers = [1,2,3,4,5,6,7,8,9,10];

let names = ["Name1", 5, "Name3", 2.34, true];

// console.log(i[0] + " - ");
// console.log(names[1] +" - "+ names[2]);

// for(let i=0; i<names.length; i++) {
//     console.log(i + " -> " + names[i]);
// }

// function call1(item, index) {
//     console.log(index + " -> " + item);
// }

// numbers.forEach(call1);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrix[2][0]);

let EmployeeTable = [
    [1, "Balaji", 10000.00, "Tutor"],
    [2, "RishiRaj", 100000.00, "Engineer"],
    [3, "Gokul", 20000.00, "HR"],
]

for (let i=0; i<3; i++) {

    console.log((i+1) + ") Record");

    for (let j=0; j<4; j++) {
        console.log(j + " index -> " + EmployeeTable[i][j]);
    }

    console.log("Record (" + (i+1) + ") completed.");
}

// EmployeeTable.forEach(ViewEmployee);

// function ViewEmployee(index, item) {
//     console.log(item.EmployeeTable[2]);
// }










