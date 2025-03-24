// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day of the week:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());

console.log("Seconds since 1970:", Math.floor(now.getTime() / 1000));
