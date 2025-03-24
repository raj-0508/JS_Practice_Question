// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'choclate' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

console.log("Initial Cart:", shoppingCart);

if (!shoppingCart.includes("Chocolate")) {
  shoppingCart.unshift("Chocolate");
}
console.log("After adding 'Chocolate':", shoppingCart);

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log("After adding 'Sugar':", shoppingCart);

let allergicToHoney = confirm(
  "Are you allergic to Honey? Click OK for Yes, Cancel for No."
);
if (allergicToHoney && shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log("After removing 'Honey' (if allergic):", shoppingCart);

let teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}
console.log("After modifying 'Tea' to 'Green Tea':", shoppingCart);

alert("Updated Shopping Cart: " + shoppingCart.join(", "));
