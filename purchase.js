fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
        console.log(item);
        const dropdown = document.querySelector("#item");
        item.map((val) => {
          const option = document.createElement("option");
          option.value = val.name;
          option.text = val.name;
          dropdown.appendChild(option);
        });
      }
    }
  })
  .catch((error) => console.error(error));

fetch("seller.json")
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
        console.log(item);
        const dropdown = document.querySelector("#seller");
        item.map((val) => {
          const option = document.createElement("option");
          option.value = val.name;
          option.text = val.name;
          dropdown.appendChild(option);
        });
      }
    }
  })
  .catch((error) => console.error(error));

const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const totalInput = document.getElementById("total");

quantityInput.addEventListener("input", updateTotal);
priceInput.addEventListener("input", updateTotal);

function updateTotal() {
  const quantity = quantityInput.value;
  const price = priceInput.value;
  const total = quantity * price;

  totalInput.value = total;
}

function functionToSubmit() {
  const seller = document.getElementById("seller").value;
  const item = document.getElementById("item").value;

  const quantity = quantityInput.value;
  const price = priceInput.value;
  const total = totalInput.value;

  // Retrieve existing purchases from localStorage
  const purchases = JSON.parse(localStorage.getItem("purchases")) || [];
  // Create new purchase object and add it to the array
  const newPurchase = {
    seller,
    item,
    quantity,
    price,
    total,
    date: new Date(),
  };
  purchases.push(newPurchase);

  // Store the updated purchases array in localStorage
  localStorage.setItem("purchases", JSON.stringify(purchases));
}
