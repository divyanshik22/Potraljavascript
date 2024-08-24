const data = JSON.parse(localStorage.getItem("sales"));
console.log(data);
// Loop through the data and display it
let sno = 1;
data.forEach((item, index) => {
  const { seller, item: itemName, quantity, price, total, date } = item;
  const formattedDate = new Date(date).toLocaleDateString();
  // Create a table row and insert the data into the cells
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${sno}</td> 
    <td>${seller}</td>
    <td>${total}</td>
    <td>${formattedDate}</td>

  `;
  sno++;
  console.log(row);
  // Append the row to the table
  const table = document.getElementById("table");
  table.appendChild(row);
});
