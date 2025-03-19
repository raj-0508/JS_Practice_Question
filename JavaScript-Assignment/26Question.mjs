
const countries = ['India', 'USA', 'Canada', 'Germany', 'France', 'Japan', 'Italy'];

console.log("Initial Countries List:", countries);

if (countries.includes('Ethiopia')) {
    console.log("ETHIOPIA");
} else {
    countries.push('Ethiopia');
    console.log("'Ethiopia' added to the countries list.");
}

console.log("Updated Countries List:", countries);