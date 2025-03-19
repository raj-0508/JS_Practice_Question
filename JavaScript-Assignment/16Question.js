// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const radius = parseFloat(prompt("Enter the radius of the circle:"));

const pi = 3.14;

const area = pi * radius * radius;

const circumference = 2 * pi * radius;

alert(
  `The area of the circle is: ${area}\nThe circumference of the circle is: ${circumference}`
);
