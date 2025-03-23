// ## **Array-Based Questions:**

// 1. Write a program that stores 5 integers in an array and prints them.

// const arr = [1, 2, 3, 4, 5];
// console.log("Array:", arr);

// 2. Modify the previous program to print the stored values in reverse order.

// console.log("Reversed Array:", arr.reverse());

// 3. Write a program that takes 5 integer inputs from the user, stores them in an array, and prints them.

// const inputArr = [];
// for (let i = 0; i < 5; i++) {
//   inputArr.push(parseInt(prompt(`Enter integer ${i + 1}:`)));
// }
// console.log("Input Array:", inputArr);
// alert("Input Array: " + inputArr);

// 4. Store 7 integers in an array and print only those values that are greater than 100.

// const numArr = [50, 120, 80, 200, 150, 300, 70];
// const greaterThan100 = numArr.filter((num) => num > 100);
// console.log("Numbers greater than 100:", greaterThan100);

// 5. Write a program that stores roll number (int) and total marks (float) of a student in an array and prints them.

// const studentRollNo = parseInt(prompt("Enter student roll number:"));
// const studentTotalMarks = parseFloat(prompt("Enter student total marks:"));
// const student = [`Roll Number: ${studentRollNo}`, `Total Marks: ${studentTotalMarks}`];
// console.log("Student Details:", student);
// alert("Student Details: " + student);

// 6. Store 5 integers in an array, copy them into another array, and print both arrays.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log("Array:", arr1);
// console.log("Copy Array:", arr2);

// 7. Write a program that lets the user enter the number of elements, stores them in an array, and prints them.

// const numOfElements = parseInt(prompt("Enter the number of elements:"));
// const Arr = [];
// for (let i = 0; i < numOfElements; i++) {
//   Arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
// }
// console.log("Elements Array:", Arr);
// alert("Elements Array: " + Arr);

// 8. Store 'n' integers in an array and print:
//    - The sum of all numbers
//    - The average of all numbers

// const n = parseInt(prompt("Enter the number of integers:"));
// const Arr = [];
// let sum = 0;

// for (let i = 0; i < n; i++) {
//   Arr.push(parseInt(prompt(`Enter integer ${i + 1}:`)));
//   sum += Arr[i];
// }

// const average = sum / n;
// console.log("Integer Array:", Arr);
// console.log("Sum:", sum);
// console.log("Average:", average);
// alert(`Sum: ${sum}\nAverage: ${average}`);

// 9. Store 7 integers in an array, find the maximum value, and print it.

// const numArray = [50, 120, 80, 200, 150, 300, 70];
// const maxNum = Math.max(...numArray);
// console.log("Maximum Number:", maxNum);

// 10. Store 8 integers in an array, ask the user for a number to search, and print its first occurrence position using linear search.

// const searchNum = parseInt(prompt("Enter a number to search:"));
// const searchArray = [10, 20, 30, 40, 50, 60, 70, 80];
// const index = searchArray.indexOf(searchNum);
// if (index !== -1) {
//   console.log(`Number ${searchNum} found at index ${index}`);
//   alert(`Number ${searchNum} found at index ${index}`);
// } else {
//   console.log(`Number ${searchNum} not found in the array`);
//   alert(`Number ${searchNum} not found in the array`);
// }

// 11. Modify the previous program to print all occurrences of the number and its total count.

// const searchNum = parseInt(prompt("Enter a number to search:"));
// const searchArray = [10, 20, 30, 40, 50, 60, 70, 80, 30, 30];
// const index = searchArray.indexOf(searchNum);
// if (index !== -1) {
//   const indices = [];
//   let count = 0;
//   let i = index;
//   while (i !== -1) {
//     indices.push(i);
//     count++;
//     i = searchArray.indexOf(searchNum, i + 1);
//   }
//   console.log(`Number ${searchNum} found at indices ${indices}`);
//   alert(`Number ${searchNum} found at indices ${indices}`);
//   console.log(`Total occurrences: ${count}`);
//   alert(`Total occurrences: ${count}`);
// } else {
//   console.log(`Number ${searchNum} not found in the array`);
//   alert(`Number ${searchNum} not found in the array`);
// }

// 12. Store 2 integers in an array, ask the user for a number, and check if it's present in the array.

// const Array = [10, 20];
// const searchNum = parseInt(prompt("Enter a number to search:"));
// if (Array.includes(searchNum)) {
//   console.log(`Number ${searchNum} found in the array`);
//   alert(`Number ${searchNum} found in the array`);
// } else {
//   console.log(`Number ${searchNum} not found in the array`);
//   alert(`Number ${searchNum} not found in the array`);
// }

// 13. Write a program that finds the minimum value in an array of 10 integers.

// const numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const minNum = Math.min(...numArray);
// console.log("Minimum Number:", minNum);

// 14. Store 10 numbers in an array and sort them in ascending order.

// const numArray = [50, 120, 80, 200, 150, 300, 70, 10, 30, 90];
// numArray.sort((a, b) => a - b);
// console.log("Sorted Array:", numArray);

// 15. Store 10 numbers in an array and sort them in descending order.

// const numArray = [50, 120, 80, 200, 150, 300, 70, 10, 30, 90];
// numArray.sort((a, b) => b - a);
// console.log("Sorted Array:", numArray);

// 16. Write a program that removes duplicate elements from an array.

// const numArray = [10, 20, 30, 40, 50, 10, 20, 60, 70, 80];
// const uniqueArray = [...new set(numArray)];
// console.log("Unique Array:", uniqueArray);

// 17. Store a list of student names in an array and print them in sorted order.

// const students = ["Raj", "Raushan", "Nitish", "Rishabh", "Ankit"];
// students.sort();
// console.log("Sorted Students:", students);

// 18. Write a program that rotates an array to the left by 2 positions.

// const numArray = [10, 20, 30, 40, 50];
// const rotatedArray = numArray.slice(2).concat(numArray.slice(0, 2));
// console.log("Rotated Array:", rotatedArray);

// 19. Write a program that rotates an array to the right by 3 positions.

// const numArray = [10, 20, 30, 40, 50];
// const rotatedArray = numArray.slice(-3).concat(numArray.slice(0, -3));
// console.log("Rotated Array:", rotatedArray);

// 20. Write a program that merges two sorted arrays into a single sorted array.

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [15, 25, 35, 45, 55];
// const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
// console.log("Merged Array:", mergedArray);

// 21. Write a program that finds the second largest number in an array.

// const numArray = [10, 20, 30, 40, 50];
// const secondLargest = numArray.sort((a, b) => b - a)[1];
// console.log("Second Largest Number:", secondLargest);

// 22. Create an array of 10 numbers and count how many of them are even and odd.

// const numArray = [10, 20, 30, 40, 50, 15, 25, 35, 45, 55];
// const evenCount = numArray.filter((num) => num % 2 == 0).length;
// const oddCount = numArray.filter((num) => num % 2 != 0).length;
// console.log("Even Count:", evenCount);
// console.log("Odd Count:", oddCount);

// 23. Write a program to find the frequency of each element in an array.

// const numArray = [10, 20, 30, 10, 20, 10, 40, 50, 30, 20];
// const frequency = numArray.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc;
// }, {});
// console.log("Frequency:", frequency);

// 24. Write a program to insert an element at a specific position in an array.

// const numArray = [10, 20, 30, 40, 50];
// const index = 2;
// const element = 25;
// numArray.splice(index, 0, element);
// console.log("Modified Array:", numArray);

// 25. Write a program to delete an element from an array at a given index.

// const numArray = [10, 20, 30, 40, 50];
// const index = 2;
// numArray.splice(index, 1);
// console.log("Modified Array:", numArray);

// 26. Write a program that swaps the first and last elements of an array.

// const numArray = [10, 20, 30, 40, 50];
// [numArray[0], numArray[numArray.length - 1]] = [
//   numArray[numArray.length - 1],
//   numArray[0],
// ];
// console.log("Modified Array:", numArray);

// // 27. Write a program to check if two arrays are equal.

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];
const areEqual = arr1.every((element, index) => element == arr2[index]);
console.log("Arrays are equal:", areEqual);
