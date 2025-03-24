// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
console.log("Sorted Ages:", ages);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

let medianAge;
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 == 0) {
  medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
  medianAge = ages[mid];
}
console.log("Median Age:", medianAge);

const sumAges = ages.reduce((sum, age) => sum + age, 0);
const avgAge = sumAges / ages.length;
console.log("Average Age:", avgAge);

const ageRange = maxAge - minAge;
console.log("Age Range:", ageRange);

const diffMinAvg = Math.abs(minAge - avgAge);
const diffMaxAvg = Math.abs(maxAge - avgAge);
console.log("|Min - Avg|:", diffMinAvg);
console.log("|Max - Avg|:", diffMaxAvg);
