// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const user_age = parseInt(prompt("Enter your age:"));

if (user_age >= 18) {
  alert("You are old enough to drive.");
} else {
  const yearsLeft = 18 - user_age;
  alert(
    `You need to wait ${yearsLeft} more year(s) to be old enough to drive.`
  );
}
