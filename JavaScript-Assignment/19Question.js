// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
  alert(`${num} is an even number.`);
} else {
  alert(`${num} is an odd number.`);
}
