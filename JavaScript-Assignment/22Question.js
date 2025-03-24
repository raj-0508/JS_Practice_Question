// 22. Write a program which tells the number of days in a month.

let month = prompt("Enter a month:").trim().toLowerCase();

let days;

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    days = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    days = 30;
    break;
  case "february":
    days = 28;
    break;
  default:
    days = "Invalid month. Please enter a valid month name.";
    break;
}

alert(`Number of days in ${month}: ${days}`);
