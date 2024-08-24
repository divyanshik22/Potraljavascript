const data = JSON.parse(localStorage.getItem("sales"));
console.log(data);
let sno = 1;
// Loop through the data and display it
data.forEach((item, index) => {
  const { seller, item: itemName, quantity, price, total } = item;

  // Create a table row and insert the data into the cells
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${sno}</td> 
    <td>${seller}</td>
    <td>${itemName}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${total}</td>
  `;
  sno++;
  console.log(row);
  // Append the row to the table
  const table = document.getElementById("table");
  table.appendChild(row);
});
