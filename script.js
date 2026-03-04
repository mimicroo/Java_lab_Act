// Main Course
function computeMainCourse() {
  let chickenQty = parseInt(document.getElementById("chickenQty").value) || 0;
  let spaghettiQty = parseInt(document.getElementById("spaghettiQty").value) || 0;
  let burgerQty = parseInt(document.getElementById("burgerQty").value) || 0;
  let age = parseInt(document.getElementById("age").value) || 0;

  let total = (chickenQty * 85) + (spaghettiQty * 60) + (burgerQty * 65);
  let discount = (age >= 60) ? total * 0.12 : 0;
  let finalTotal = total - discount;

  document.getElementById("originalTotal").innerText = total;
  document.getElementById("discount").innerText = discount;
  document.getElementById("finalTotal").innerText = finalTotal;
}

// Drinks
function computeDrinks() {
  let cokeQty = parseInt(document.getElementById("cokeQty").value) || 0;
  let juiceQty = parseInt(document.getElementById("juiceQty").value) || 0;
  let teaQty = parseInt(document.getElementById("teaQty").value) || 0;
  let age = parseInt(document.getElementById("age").value) || 0;

  let total = (cokeQty * 45) + (juiceQty * 50) + (teaQty * 50);
  let discount = (age >= 60) ? total * 0.12 : 0;
  let finalTotal = total - discount;

  document.getElementById("originalTotal").innerText = total;
  document.getElementById("discount").innerText = discount;
  document.getElementById("finalTotal").innerText = finalTotal;
}

// Desserts
function computeDessert() {
  let pieQty = parseInt(document.getElementById("pieQty").value) || 0;
  let haloQty = parseInt(document.getElementById("haloQty").value) || 0;
  let sundaeQty = parseInt(document.getElementById("sundaeQty").value) || 0;
  let age = parseInt(document.getElementById("age").value) || 0;

  let total = (pieQty * 45) + (haloQty * 75) + (sundaeQty * 40);
  let discount = (age >= 60) ? total * 0.12 : 0;
  let finalTotal = total - discount;

  document.getElementById("originalTotal").innerText = total;
  document.getElementById("discount").innerText = discount;
  document.getElementById("finalTotal").innerText = finalTotal;
}