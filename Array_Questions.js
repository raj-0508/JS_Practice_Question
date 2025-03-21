// ## **Array-Based Questions:**

// 1. Write a program that stores 5 integers in an array and prints them.

const arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);

// 2. Modify the previous program to print the stored values in reverse order.

console.log("Reversed Array:", arr.reverse());

// 3. Write a program that takes 5 integer inputs from the user, stores them in an array, and prints them.

const inputArr = [];
for (let i = 0; i < 5; i++) {
    inputArr.push(parseInt(prompt(`Enter integer ${i + 1}:`)));
}
console.log("Input Array:", inputArr);
alert("Input Array: " + inputArr);

// 4. Store 7 integers in an array and print only those values that are greater than 100.

const numArr = [50, 120, 80, 200, 150, 300, 70];
const greaterThan100 = numArr.filter(num => num > 100);
console.log("Numbers greater than 100:", greaterThan100);

// 5. Write a program that stores roll number (int) and total marks (float) of a student in an array and prints them.

const student = [10, 73.5];
console.log("Student Details:", student);

// 6. Store 5 integers in an array, copy them into another array, and print both arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
console.log("Array:", arr1);
console.log("Copy Array:", arr2);

// 7. Write a program that lets the user enter the number of elements, stores them in an array, and prints them.




// 8. Store 'n' integers in an array and print:
//    - The sum of all numbers
//    - The average of all numbers
// 9. Store 7 integers in an array, find the maximum value, and print it.
// 10. Store 8 integers in an array, ask the user for a number to search, and print its first occurrence position using linear search.
// 11. Modify the previous program to print all occurrences of the number and its total count.
// 12. Store 2 integers in an array, ask the user for a number, and check if it's present in the array.
// 13. Write a program that finds the minimum value in an array of 10 integers.
// 14. Store 10 numbers in an array and sort them in ascending order.
// 15. Store 10 numbers in an array and sort them in descending order.
// 16. Write a program that removes duplicate elements from an array.
// 17. Store a list of student names in an array and print them in sorted order.
// 18. Write a program that rotates an array to the left by 2 positions.
// 19. Write a program that rotates an array to the right by 3 positions.
// 20. Write a program that merges two sorted arrays into a single sorted array.
// 21. Write a program that finds the second largest number in an array.
// 22. Create an array of 10 numbers and count how many of them are even and odd.
// 23. Write a program to find the frequency of each element in an array.
// 24. Write a program to insert an element at a specific position in an array.
// 25. Write a program to delete an element from an array at a given index.
// 26. Write a program that swaps the first and last elements of an array.
// 27. Write a program to check if two arrays are equal.
// 28. Write a program that finds all pairs of elements in an array whose sum is equal to a given number.
// 29. Write a program to find the intersection of two arrays.
// 30. Write a program to find the union of two arrays.
