const jsonData = [
    {
      "name": "John",
      "age": 25,
      "country": "USA"
    },
    {
      "name": "Alice",
      "age": 30,
      "country": "Canada"
    }
  ];
  
   
  
  const tableBody = document.querySelector("#myTable tbody");
  
   
  
  jsonData.forEach(item => {
    const newRow = document.createElement("tr");
  
   
  
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    newRow.appendChild(nameCell);
  
   
  
    const ageCell = document.createElement("td");
    ageCell.textContent = item.age;
    newRow.appendChild(ageCell);
  
   
  
    const countryCell = document.createElement("td");
    countryCell.textContent = item.country;
    newRow.appendChild(countryCell);
  
   
  
    tableBody.appendChild(newRow);
  });