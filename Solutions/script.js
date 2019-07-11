// // Variables and datatypes
// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// var _3years = 3;
// var johnMark = "John and Mark";
// var _if = 23;

// //Variables mutation and type coercion
// var firstName = "John";
// var age = 28;
// //Type Coercion
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " Is he married? " +
//     isMarried
// );

// //Variable Mutation - change the variable assignment
// age = "twenty eight";
// job = "Driver";

// // alert(
// //   firstName +
// //     " is a " +
// //     age +
// //     " year old " +
// //     job +
// //     " Is he married? " +
// //     isMarried
// // );

// var lastName = prompt("What is his last Name?");
// console.log(firstName + lastName);

// //Basic Operators
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(now + 2);
// console.log(now + 2);
// console.log(now / 10);

// //Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeOf Operators
// // console.log(typeOf(johnOlder));
// // console.log(typeOf(ageJohn));
// // console.log(typeOf("Mark is Older than John"));
// // var x;
// // console.log(typeOf(x));

// //Operator Precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple Assignments - assignment goes from rightto left
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8*4-6  // 32-6 // 26
// console.log(x, y);

// //More Operators
// x *= 2;
// console.log(x);

// x++; //adds 1 to x
// console.log(x);

// /*****************************
//  * CODING CHALLENGE 1
//  */

// /*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
// GOOD LUCK 😀
// */

// //BMI = mass / height^2 = mass / (height * height)// mass in kg // height in meter

// //Question 1
// var massJohn = 20;
// var heightJohn = 30;

// var massMark = 25;
// var heightMark = 45;

// //Question 2
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// var bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);

// var massBoth = massJohn + massMark;
// console.log(massBoth + "kg");

// var heightBoth = heightJohn + heightMark;
// console.log(heightBoth + "m");

// var bothBmi = massBoth / (heightBoth * heightBoth);
// console.log(bothBmi);

// //Question 3 & 4
// var markHigher = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's?" + markHigher);

// // NEXT SECTION //

// // If/Else Statements //

// var massJohn = 20;
// var heightJohn = 30;

// var massMark = 25;
// var heightMark = 45;

// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// var bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);

// if (bmiMark > bmiJohn) {
//   console.log("Mark has a higer BMI than John");
// } else {
//   console.log("John has a higher BMI than Mark");
// }

// // Boolean Login

// var firstName = "John";
// var age = 25;

// if (age < 13) {
//   console.log(`${firstName} is a boy`);
// } else if (age >= 13 && age < 20) {
//   console.log(`${firstName} is a teenager`);
// } else if (age >= 20 && age < 30) {
//   console.log(`${firstName} is a young man`);
// } else {
//   console.log(`${firstName} is a man`);
// }

// //Ternary Operators
// //Conditional Operators (AKA)

// var firstName = "Kadie";
// var age = 16;

// age >= 18
//   ? console.log(`${firstName} drinks beer`)
//   : console.log(`${firstName} drinks juice`);

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// //Switch Statements - Conditionals
// //Can have multiple cases return same things
// var job = "developer";

// switch (job) {
//   case "developer":
//   case "instructor":
//     console.log(`${firstName} loves being a developer`);
//     break;
//   case "driver":
//     console.log(`${firstName} loves driving with Uber`);
//     break;
//   default:
//     console.log(`${firstName} loves working`);
// }

// //Switch using numbers example from above:
// //We want to evaluate whether the stated age is true/false

// switch (true) {
//   case age < 13:
//     console.log(`${firstName} is a boy`);
//     break;
//   case age >= 13 && age < 20:
//     console.log(`${firstName} is a teenager`);
//     break;
//   case age >= 20 && age < 30:
//     console.log(`${firstName} is a young man`);
//     break;
//   default:
//     console.log(`${firstName} is a man`);
// }

// //Truthy Falsy Values
// //falsy values: undefined, null, 0, '' and NaN
// //truthy values: NOT falsey values

// var height;

// height = 23; //var is defined

// if (height || height === 0) {
//   console.log("var is defined");
// } else {
//   console.log("var has not been defined");
// } //var has not been defined

// //Equality Operators
// //Type coercion - JS will look for similarities in variables.
// //So a strong '23' will be converted to a number 23 and then compares the numbers.

// if (height == "23") {
//   console.log("The == operator does type coercion!");
// } else {
//   console.log("nothing");
// }

// /*****************************
//  * CODING CHALLENGE 2
//  */

// /*
// John and Mike both play basketball in different teams.
// In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console.
// Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
// HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// GOOD LUCK 😀
// */

// //Questions 1 & 2
// var JohnScores = 89 + 120 + 103;
// var JohnAverage = JohnScores / 3;
// console.log(JohnAverage); //104

// var MikeScores = 116 + 94 + 123;
// var MikeAverage = MikeScores / 3;
// console.log(MikeAverage); //111

// var MaryScores = (97 + 134 + 105) / 3;
// console.log(MaryScores);

// //Question 3
// if (JohnAverage > MikeAverage) {
//   console.log(
//     `John team is the winner with an average score of ${JohnAverage}!`
//   );
// } else if (MikeAverage > JohnAverage) {
//   console.log(
//     `Mike team is the winner with an average score of ${MikeAverage}!`
//   );
// } else {
//   console.log("There was a draw in this match!");
// }

// //extra question 4 solution
// // if (JohnAverage > MikeAverage && JohnAverage > MaryScores) {
// //   console.log("John won the game!");
// // }

// NEXT SECTION

//Functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageKadie = calculateAge(1991);
var ageDanielle = calculateAge(1989);
console.log(ageKadie, ageDanielle);

//another example with functional declarations
function YearsUntilRetire(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
}

YearsUntilRetire(1990, "Katia");
YearsUntilRetire(1945, "Florence");
YearsUntilRetire(1985, "Tanya");

//Functional Expressions - always produce a value

var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return `${firstName} teaches coding`;
    case "developer":
      return `${firstName} loves to code in reactJS`;
    case "driver":
      return `${firstName} drives with Lyft`;
    default:
      return `${firstName} does another job`;
  }
};

console.log(whatDoYouDo("teacher", "Taylor"));
console.log(whatDoYouDo("developer", "Grace"));
console.log(whatDoYouDo("finance", "Ben"));

//Arrays
//arrays are zero based - so start counting at zero
var names = ["John", "Mary", "Danielle"];
var years = [1990, 1969, 2004];

console.log(names, years);
console.log(names[2]);

names[1] = "Kadie"; //changes "Mary" to "Kadie"
names[3] = "Janet"; //adds another name to the array - mutates it
names[names.length] = "Kim"; //adds Kim as the last name in the array
console.log(names);

//Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); //adds element to the end of the array
john.unshift("Mr"); //adds element to the begining of the array
john.pop(); //remove element at the end of the array
john.shift(); //removes the first element of the arary
console.log(john);

//indexOf is good to check to see if an element is present in the array. It works like the following:
//also, if an element is not in the array, it returns -1, if an element is in the array, it will return the index of the element
john.indexOf(1990); //returns which position 1990 is in the array
console.log(john.indexOf(1990));

console.log(john.indexOf(25)); //if element is not in the array, consloe will return -1

let isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";

let isTeacher =
  john.indexOf("teacher") === -1
    ? "John is not a teacher"
    : "John is a teacher";

console.log(isDesigner); //will log john is not a designer since designer is not in the array
console.log(isTeacher); //will log john is a teacher since teacher is in the array

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

//Simple tip calculator!
function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(finalValues);
