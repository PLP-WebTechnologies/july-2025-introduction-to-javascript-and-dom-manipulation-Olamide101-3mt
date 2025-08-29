// =======================
// Part 1: Variables & Conditionals
// =======================
function checkAge() {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult!";
  } else if (age > 0) {
    result.textContent = "👶 You are under 18.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

// =======================
// Part 2: Functions
// =======================
function calculateTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const result = document.getElementById("totalResult");

  if (isNaN(price) || isNaN(quantity)) {
    result.textContent = "⚠️ Enter valid numbers.";
    return;
  }

  const total = price * quantity;
  result.textContent = `💰 Total cost: $${total}`;
}

// =======================
// Part 3: Loops
// =======================
function countdown() {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous items

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// =======================
// Part 4: DOM Manipulation
// =======================

// Toggle box color
document.getElementById("toggleBtn").addEventListener("click", function () {
  const box = document.getElementById("colorBox");
  box.style.background =
    box.style.background === "rgb(251, 133, 0)" ? "#219EBC" : "#FB8500";
});

// Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});
