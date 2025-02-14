// Q1. Write a program which generate and print number from 5 to 10.

// for (let i = 5; i <=10; i++) {
//     console.log(i);
// }





// Q2. Write a program which define any integer and which also enters number of times the enter number to be printed.

// let num = 55
// let times = 5
// for (let i = 0; i < times; i++) {
//     console.log(num);
// }






// Q3. Write a program which enter any integer and print its multiplication table in table format
// format- 
//   8 * 1 = 8


// let num = 49
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }





// Q4. Write a program which enter any integer and print in reverse order.

// let n = 45678
// let reverse =  0
// while (n > 0) {
//     reverse = (reverse * 10) + (n % 10)
//     n = Math.floor(n / 10)
// }
// console.log(reverse);







// Q5. Write a program which enter any integer than calculate and print the sum of its digit.

// let number = 45;
// let sum = 0;
// while (number > 0) {
//     let remainder = number % 10;
//     sum = sum + remainder;
//     number + Math.floor(number / 10)
// }
// console.log(sum);




// Q6. Write a program which enter any integer than calculate and print its factorial.

// num = 3;
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log(factorial);





// Q7. Write a program which enter two integer. for example a and b then calculate and print its power a power b.

// let a = 4;
// let b = 3;
// let c = a ** b;
// console.log(`${a}^${b} = ${c} `);












// While Loop Solutions


// Q1. Write a program which print India, 3 times on computer screen.

// let count = 0;
// while (count < 3) {
//     console.log("India");
//     count++;
// }




// Q2. Write a program which generate and print the number from 10 to 5.

//  let num = 10;
// while (num >= 5) {
//     console.log(num);
//     num--;
// }




// Q3. Write a program which generate and print 1st 10 odd no.

// let count = 0;
// let num = 1;
// while (count < 10) {
//     console.log(num);
//     num = num + 2;
//     count++;
// }




// Q4. Write a program which entre the no. of odd no. to be generated and printed and that may odd no. should be generated and printed.

// let n = 3;
// count = 0, num = 1;
// while (count < n) {
//     console.log(num);
//     num = num + 2;
//     count++;
// }





// Q5. Write which enter any integer and print it 5 times with serial no.

// num = 99;
// count = 1;
// while (count <= 5) {
//     console.log(`${count}.`, num);
//     count++;
// }





// Q6. Write a program which enter any integer and which also enters, number of times the enter number to be printed.

// num = 99;
// times = 7;
// count = 0;
// while (count < times) {
//     console.log(num);
//     count++;
// }







// Q8. Write a program which enter sales made by any salesman then calculate and print the commission which is 5% of sale. This Program should work for 3 salesman.

// let sales = 5000;
// let commission = sales * 0.05;
// count = 1;
// while (count < 4) {
//     console.log(`${count}`, commission);
//     count++;
// }




// Q9. Write a program which forces the user, to enter any positive value and print it. the program should keep on asking the number again and again, till user do not enter any positive.