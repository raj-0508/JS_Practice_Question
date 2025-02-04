// 6. Question - WAP which enter sales made by any salesman than calculate and print the commision, according
// 				to following rules - 
// 				Sale                      Commission
// 				upto 25000                5% of sales
// 				25001 - 50000             7% of sales
// 				50001 - 75000             8% of sales
// 				75001 +                   10% of sales

// Solution:

// let sale =80000
// if (sale <= 25000){
// 	console.log(commission = sale * 0.05);
// }else if (sale <= 50000){
// 	console.log(commission = sale * 0.07);
// }else if (sale <= 75000){
// 	console.log(commission = sale * 0.08);
// }else{
//     console.log(commission = sale * 0.10);
// }








// 7. Question - Write a program which enter marks in three subject of a students and calculate its average, independing on the average check and print the division according to following rule.
	
//	 	Average                      Division
// 		60+                           First
// 		45 - <60                      Second
// 		33 - <45                      third
// 		<33                           Fails


// Solution:

// let sub1 =56
// let sub2 =76
// let sub3 =86
// avg = ((sub1 + sub2 + sub3) / 3)
// console.log(avg);

// if (avg >= 60){
// 	console.log("First Division");
// }else if (avg < 60 && avg >= 45 ){
// 	console.log("Second Division");
// }else if (avg < 45 && avg >= 33){
// 	console.log("Third Division");
// }else{
//     console.log("Fail");
// }









// 8. Question - Write a program which enter annual family income and of a person and if the income is from 1 lakh to 2 lakh and age is also form 18 to 24 then print eligible for scholorship, otherwise print not eligible for scholorship.


// Solution:

// let income = 100085
// let age = 19

// if (income >= 100000 && income <= 200000 && age >= 18 && age <= 24) {
//     console.log("Eligible for Scholarship");
// } else {
//     console.log("Not Eligible for Scholarship");
// }










//  9. Question - Write a program which enter any code in integer and if it is 5,7,11 or 24 then print Right code otherwise print wrong code.


// Solution:

// let code = 11
// if (code == 5 || code == 7 || code == 11 || code == 24) {
//     console.log("Right code");
// } else {
//     console.log("Wrong code");
// }











// 10. Question - WAP which enter sex code of a person as M or m for male, or F or f form female then test and print whether
// the given data is of male, female or it was wrong code, enter by user.


// let sex = "f"
// if (sex == "M"  || sex == "m") {
//     console.log("Male");
// } else if (sex == "F" || sex == "f") {
//     console.log("Female");
// } else {
//     console.log("Wrong Code");
// }









// 11. Question - Write a MENU DRIVEN program, which calculate and print the area of squar or circle depending on the users coice from the menu.
// step 1 -
// 		  1. ...........Area of Square
// 		  2. ...........Area of circle
// 		       Enter your choice?
					   
// Step 2 - 
// 		Depending on choice it should ask:
// 		   Enter side of square?
// 		   or
// 		   Enter radius of circle?
				   
// Step 3 -
// 		output As-
// 		Area of Square whose side is ..... is .....
// 		or
// 		Area of circle whose Radius is ...... is ......



// Solution:

// let side = 95
// let radius = 45
        
// let choice = 2
        
// if (choice == 1) {
//     console.log(`Area of Square whose side is ${side} is ${side ** 2}`);
// } else if (choice == 2) {
//     console.log(`Area of Circle whose radius is ${radius} is ${(Math.PI * radius ** 2).toFixed(2)}`);
// } else {
//     console.log("Invalid choice! Please enter 1 or 2.");
// }