const data = JSON.parse(localStorage.getItem("purchases"));
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

const currentTime = new Date(); // Get the current time

const morningStartTime = new Date(); // Define the morning start time
morningStartTime.setHours(6, 0, 0); // Set the morning start time to 06:00:00

const eveningStartTime = new Date(); // Define the evening start time
eveningStartTime.setHours(18, 0, 0); // Set the evening start time to 18:00:00

let localStorageKey;

if (currentTime >= morningStartTime && currentTime < eveningStartTime) {
  localStorageKey = "purchases"; // Use "purchases" local storage during morning
} else {
  localStorageKey = "sales"; // Use "sales" local storage during evening
}

const dat = JSON.parse(localStorage.getItem(localStorageKey));
console.log(dat, "data");
