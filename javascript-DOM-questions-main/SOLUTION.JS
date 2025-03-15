// Question 1

document.querySelector(
  ".side-bar .crayons-card .crayons-subtitle-2"
).textContent = "iNeuron";

document.querySelector(".side-bar .crayons-card .color-base-70").textContent =
  "I Write Code";

// Question 2

items = document.querySelectorAll(
  ".as-imagegrid-wrapper .as-imagegrid-item span"
);

itemsArray = Array.from(items).map((items) => items.innerText);

console.log(itemsArray);

Output: Array(7)[("iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV")];

// Question 3

// Question 4

// Question 5

button = document.querySelector(".floating-navigation__button span");

button.innerText = "Check out";

// Question 6

searchBox = document.querySelector("._input_1f3oz_13");

searchBox.style.backgroundColor = "red";

// Question 7

