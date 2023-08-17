let jsonString = `[
    {
        "Name":"Bala",
        "Salary":1000
    },
    {
        "Name":"Ramesh",
        "Salary":5000
    },
    {
        "Name":"Vishal",
        "Salary":8000
    }
]`

let jsonData = JSON.parse(jsonString);
// console.log(jsonData[1].Salary);
// console.log(jsonData[2].Name);
let table1 = document.getElementById("table1");
let tableDataName = document.getElementById("dataRowName");
let tableDataSalary = document.getElementById("dataRowSalary");

for (let i=0; i < 3; i++) {
    var dataRow = document.createElement("tr");
    var newDataRowName = document.createElement("td");
    var newDataRowSalary = document.createElement("td");
    newDataRowName.textContent = jsonData[i].Name
    newDataRowSalary.textContent = jsonData[i].Salary
    //table1.insertRow(1);
    dataRow.appendChild(newDataRowName)
    dataRow.appendChild(newDataRowSalary);
    table1.appendChild(dataRow);

    // var table1 = document.getElementById('table1').insertRow(1);
    // var c1=table1.insertCell(0);
    // var c2=table1.insertCell(1);
    // c1.innerHTML=jsonData[i].Name;
    // c2.innerHTML=jsonData[i].Salary;

}



// console.log(JSON.stringify(jsonData));