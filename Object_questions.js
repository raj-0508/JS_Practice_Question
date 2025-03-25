// ## **Object-Based Questions:**

// 1. Create an object that stores details of a student (name, age, marks) and prints it.

// let student = {
//   name: "Raj Singhaniya",
//   age: 20,
//   marks: 85,
// };

// 2. Modify the previous program to allow the user to enter student details dynamically.

// student = {
//   name: prompt("Enter student name:"),
//   age: parseInt(prompt("Enter student age:")),
//   marks: parseFloat(prompt("Enter student marks:")),
// };

// 3. Write a program that stores multiple student records in an array of objects and prints them.

// let students = [
//   { name: "Raushan", age: 20, marks: 75 },
//   { name: "Raj", age: 21, marks: 85 },
//   { name: "Nitish", age: 19, marks: 90 },
// ];

// console.log("Student Records:", students);

// 4. Store employees details (ID, Name, Salary) in an object and display them.

// let employees = [
//   { id: 101, name: "Raj", salary: 50000 },
//   { id: 102, name: "x", salary: 60000 },
//   { id: 103, name: "y", salary: 55000 },
// ];

// console.log("Employee Details:", employees);

// 5. Modify the previous program to find the employee with the highest salary.

// let highestSalaryEmployee = employees.reduce((max, employee) =>
//   employee.salary > max.salary ? employee : max
// );

// console.log("Employee with Highest Salary:", highestSalaryEmployee);

// 6. Write a program to count the number of properties in an object.

// const student = {
//   name: "John Doe",
//   age: 20,
//   marks: 85,
// };

// const propertyCount = Object.keys(student).length;
// console.log("No of properties:", propertyCount);

// 7. Create an object representing a book with properties like title, author, and price. Print all details.

// const book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   price: 15.99,
// };

// console.log("Book Details:", book);

// 8. Write a function that takes an object and prints all its key-value pairs.

// function printObject(obj) {
//   Object.entries(obj).forEach(([key, value]) =>
//     console.log(`${key}: ${value}`)
//   );
// }

// const person = {
//   name: "Alice",
//   age: 25,
//   city: "New York",
// };

// printObject(person);

// 9. Create an object representing a car with methods to start, stop, and display speed.

// const car = {
//   start: function () {
//     console.log("Car started.");
//   },
//   stop: function () {
//     console.log("Car stopped.");
//   },
//   displaySpeed: function () {
//     console.log("Current speed:", this.speed);
//   },
//   speed: 0,
// };

// car.speed = 60;

// car.start();
// car.displaySpeed();
// car.stop();

// 10. Write a program that deep clones an object without modifying the original.

// let obj = {
//   name: "Raj",
//   age: 21,
//   address: {
//     country: "India",
//     state: "BR",
//   },
// };

// let clonedObj = structuredClone(obj);

// console.log("Original Object:", obj);
// console.log("Cloned Object:", clonedObj);

// 11. Create an object representing a bank account with properties like account number, balance, and methods to deposit and withdraw money.

// const bankAccount = {
//   accountNumber: "123456789",
//   balance: 1000,
//   deposit: function (amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//   },
//   withdraw: function (amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
//     } else {
//       console.log("Insufficient balance.");
//     }
//   },
// };

// bankAccount.deposit(500);
// bankAccount.withdraw(200);

// // 12. Write a program to merge two objects into a single object.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObj = Object.assign({}, obj1, obj2);

// console.log("Merged Object:", mergedObj);

// // 13. Write a program that checks if an object is empty.

// function isEmpty(obj) {
//   return Object.keys(obj).length == 0;
// }

// const emptyObj = {};
// const nonEmptyObj = { a: 1, b: 2 };

// console.log("Empty Object:", isEmpty(emptyObj));
// console.log("Non-Empty Object:", isEmpty(nonEmptyObj));

// // 14. Create an object representing a rectangle with properties like width and height and a method to calculate area.

// const rectangle = {
//   width: 5,
//   height: 3,
//   area: function () {
//     return this.width * this.height;
//   },
// };

// console.log("Rectangle Area:", rectangle.area());

// // 15. Write a program that converts an object into an array of key-value pairs.

// const obj = { a: 1, b: 2, c: 3 };
// const arr = Object.entries(obj);
// console.log(arr);

// // 16. Write a function that checks if a given key exists in an object.

// function keyExists(obj, key) {
//   return obj.hasOwnProperty(key);
// }

// const student = {
//   name: "John Doe",
//   age: 20,
//   marks: 85,
// };

// console.log(keyExists(student, "name"));

// // 17. Create an object representing a movie with properties like title, director, and rating. Print its details.

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   rating: 8.8,
// };

// console.log("Movie Details:", movie);

// // 18. Write a program that sorts an array of objects based on a given property.

// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
// ];

// students.sort((a, b) => a.age - b.age);

// console.log("Sorted Students:", students);

// // 19. Create an object representing a smartphone with properties like brand, model, and price. Print its details.

// const smartphone = {
//   brand: "Apple",
//   model: "iPhone 12",
//   price: 999,
// };

// console.log("Smartphone Details:", smartphone);

// // 20. Write a program to find the total price of all items in a shopping cart represented as an array of objects.

// const cart = [
//   { name: "Product A", price: 10 },
//   { name: "Product B", price: 20 },
//   { name: "Product C", price: 30 },
// ];

// const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// console.log("Total Price:", totalPrice);

// // 21. Write a function that takes an object and returns a new object with only the specified keys.

// function selectKeys(obj, keys) {
//   return Object.fromEntries(keys.map((key) => [key, obj[key]]));
// }

// const obj = { a: 1, b: 2, c: 3 };
// const selectedKeys = ["a", "c"];
// const newObj = selectKeys(obj, selectedKeys);

// console.log("New Object:", newObj);

// // 22. Write a program to convert an array of objects into a single object grouped by a specific property.

// const students = [
//   { name: "Alice", class: "A" },
//   { name: "Bob", class: "B" },
//   { name: "Charlie", class: "A" },
// ];

// const groupedStudents = students.reduce((acc, student) => {
//   if (!acc[student.class]) {
//     acc[student.class] = [];
//   }
//   acc[student.class].push(student);
//   return acc;
// }, {});

// console.log("Grouped Students:", groupedStudents);

// // 23. Write a program to update the value of a specific key in an object dynamically.

// const obj = { a: 1, b: 2, c: 3 };
// const keyToUpdate = "b";
// const newValue = 10;

// obj[keyToUpdate] = newValue;

// console.log("Updated Object:", obj);

// // 24. Write a program that finds the property with the highest numeric value in an object.

// const obj = { a: 10, b: 20, c: 15 };
// const maxKey = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));

// console.log("Property with highest value:", maxKey);

// // 25. Create an object representing a library with an array of books and methods to add and remove books.

// const library = {
//   books: [],
//   addBook(book) {
//     this.books.push(book);
//   },
//   removeBook(book) {
//     const index = this.books.indexOf(book);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//     }
//   },
// };

// library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
// library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee" });

// console.log("Library:", library);

// // 26. Write a program that serializes and deserializes a JSON object.

// const obj = { a: 1, b: 2, c: 3 };
// const jsonString = JSON.stringify(obj);
// const deserializedObj = JSON.parse(jsonString);

// console.log("Serialized Object:", jsonString);
// console.log("Deserialized Object:", deserializedObj);

// // 27. Write a function that compares two objects and checks if they are equal.

// function objectsEqual(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 2, a: 1 };

// console.log("Objects are equal:", objectsEqual(obj1, obj2));

// // 28. Write a program to clone an object using Object.assign and spread operator.

// const obj = { a: 1, b: 2 };
// const clonedObj1 = Object.assign({}, obj);
// const clonedObj2 = { ...obj };

// console.log("Original Object:", obj);
// console.log("Cloned Object 1:", clonedObj1);
// console.log("Cloned Object 2:", clonedObj2);

// // 29. Write a program that finds the most frequently occurring value in an object.

// const obj = { a: 1, b: 2, c: 1, d: 2, e: 2 };
// const values = Object.values(obj);
// const mostFrequentValue = values.reduce((acc, value) => {
//   acc[value] = (acc[value] || 0) + 1;
//   return acc;
// }, {});

// const maxCount = Math.max(...Object.values(mostFrequentValue));
// const mostFrequent = Object.keys(mostFrequentValue).find(
//   (key) => mostFrequentValue[key] === maxCount
// );

// console.log("Most Frequent Value:", mostFrequent);

// // 30. Write a program to dynamically generate an object from user input.

// const obj = {};

// while (true) {
//   const key = prompt("Enter key:");
//   if (!key) break;
//   const value = prompt("Enter value:");
//   obj[key] = value;
// }

// console.log("Generated Object:", obj);
