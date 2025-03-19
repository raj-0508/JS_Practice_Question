// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log("Sum of Even Numbers from (0 to 100) is :", sumEven);
console.log("Sum of Odd Numbers from (0 to 100) is :", sumOdd);
