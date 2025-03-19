// 30. Write a script which generates a random hexadecimal number.

function getRandomHex() {
  let hex = "#";
  const hexChars = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * 16)];
  }

  return hex;
}

console.log(getRandomHex());
