// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
//     - If the user input is not month name, return "Input is invalid"

let month = prompt("Enter a month:").trim().toLowerCase();

let season;

if (["september", "october", "november"].includes(month)) {
  season = "Autumn";
} else if (["december", "january", "february"].includes(month)) {
  season = "Winter";
} else if (["march", "april", "may"].includes(month)) {
  season = "Spring";
} else if (["june", "july", "august"].includes(month)) {
  season = "Summer";
} else {
  season = "Input is invalid. Please enter a valid month name.";
}

alert(`Season: ${season}`);
