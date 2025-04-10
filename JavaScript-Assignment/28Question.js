// program to print prime numbers between the two numbers

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(start, end) {
  console.log(`Prime numbers between ${start} and ${end}:`);
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let start = Math.min(num1, num2);
let end = Math.max(num1, num2);

printPrimes(start, end);
