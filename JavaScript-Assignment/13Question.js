// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));

const area = 0.5 * base * height;

alert(`The area of the triangle is: ${area}`); // Run in browser console to get results.
