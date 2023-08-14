// Javascript

// Looping statement

// foreach
// studentList 
// employeeList


// array
// for
// while
// do..while

// 1-100
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");
// console.log("Welcome");

// let name = "Tiger";
// for (let i=1; name!="Lion" ; j++)
// {
// 	console.log("Welcome");

// 	if (i==11){
// 		name = "Lion";
// 	}

// }

// for (initial value ; condition ; incremental/decremental value)
// for (let j=100; j>=0; j++) -> browser get crash
// 100-1



// initial value
// while (condition)
// {


// 	incremental/decremental value
// }

// 6th Table
// =========
// let i;
// let j = 1;
// for (let i = 6; i <= 60; i += 6) {
//     console.log("6 * " + j + " = " + i);
//     j++;
// }

// for (let i = 1; i <= 10; i++)
//     console.log("6 * " + i + " = " + (i * 6));

// Dynamic
// let tableno = prompt("Enter Table number : ");
// for (let i = 1; i <= 10; i++)
//     console.log(tableno + " * " + i + " = " + (i * tableno));

// Table 1-10
// Nested Looping Statement for { for{} }
// Nested Logical statment if { if{} }
for (let tableno = 1; tableno <= 10; tableno++) {
    console.log("Table : " + tableno)
    console.log("===================")

    for (let i = 1; i <= 10; i++)
        console.log(`| ${tableno} * ${i} = ${(i * tableno)} |`);
    // console.log("| " + tableno + " * " + i + " = " + (i * tableno) + " |");

    console.log("===================")
}
