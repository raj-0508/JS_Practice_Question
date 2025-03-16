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

searchInput = document.querySelector("#top-nav-search-input");
searchInput.value = "CSS selectors";
document
  .getElementsByClassName(".button .action .has-icon .search-button")
  .click();

// Question 8

document.querySelectorAll("a").forEach((lang, i) => {
  if (i % 2 !== 0) lang.remove();
});

// Question 9

textElement = document.querySelector(".main-wrapper  h1");
textElement.style.fontFamily = "monospace";
textElement.style.color = "red";

// Question 10

button = document.querySelector(
  "a.btn-cta-big.btn-block.signup-btn.btn-cta span.login-btn-text"
);
button.addEventListener(
  "mouseover",
  () => (button.style.backgroundColor = "blue")
);

button.addEventListener(
  "mouseout",
  () => (button.style.backgroundColor = "")
);

// Question 11


