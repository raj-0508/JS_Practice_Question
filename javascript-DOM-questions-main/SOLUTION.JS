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

faqList = document.querySelector(".accordion-homepage");

newFAQ = document.createElement("section");

faqText = document.createTextNode("My New FAQ");

newFAQ.appendChild(faqText);

faqList.appendChild(newFAQ);

// Question 4

contactNumber = document.querySelector(".contact-number-class");
contactNumber.innerText = "New Contact Number";

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

button.addEventListener("mouseout", () => (button.style.backgroundColor = ""));

// Question 11

logo = document.querySelector(".wrapper a");

if (logo) {
  newLogo = document.createElement("img");
  newLogo.src = "https://ineuron.ai/images/ineuron-logo.png";
  newLogo.style.width = "100px";

  logo.replaceWith(newLogo);
}

// Question 12

githubButton = document.querySelector(
  ".FormField-input.Button--primary.Button--medium.Button"
);
githubButton.style.backgroundColor = "blue";

// Question 13

hackerrankDesc = document.querySelector(".pageheader_title.w-richtext");
hackerrankDesc.innerHTML = "JSBOOTCAMP";

// Question 14

hotDeals = document.querySelector(
  ".PromotionBanner__text__1HGpW.swiper-slide-content"
);
hotDeals.style.fontSize = "80px";

// Question 15

gamingText = document.querySelector(".ps-title");
gamingText.style.textAlign = "right";

// Question 16

vercelHeading = document.querySelector(
  ".text_wrapper__i87JK.hero_heading__VOetF "
);
vercelHeading.innerHTML = "Start with Scratch";

// Question 17

sonyButton = document.querySelector(
  ".CategoryNav__PdpNavBuyLink.js-datalayer-action-event.js-product-price.js-where-to-buy.js-datalayer-product-availability"
);
sonyButton.innerHTML = new Date().toLocaleDateString();

// Question 18

philipsBg = document.querySelector(".p-n02v3__shape-wrapper-desktop ");
philipsBg.style.backgroundColor = "orange";

// Question 19

canonLogo = document.querySelector(".p-header__top--logo a img");
console.log(canonLogo.src);

// Question 20

subtitle = document.querySelector(
  ".subtitle.ft-subtitle-3-1.font-medium.stop-prop"
);
subtitle.style.color = "orange";
