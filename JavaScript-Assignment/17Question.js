// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let formattedDate1 = `${year}-${month.toString().padStart(2, "0")}-${day
  .toString()
  .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}`;
let formattedDate2 = `${day.toString().padStart(2, "0")}-${month
  .toString()
  .padStart(2, "0")}-${year} ${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}`;
let formattedDate3 = `${day.toString().padStart(2, "0")}/${month
  .toString()
  .padStart(2, "0")}/${year} ${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}`;

console.log(formattedDate1);
console.log(formattedDate2);
console.log(formattedDate3);
