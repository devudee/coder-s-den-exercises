// Exercises: Level 1
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
let age = 5;
if (age >= 30) {
  console.log("You are old enough to drive");
} else if (age < 18) {
  console.log("You are left with");
} else {
  console.log("me");
}
//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
let myAge1 = 7;
let yourAge1 = 50;
let ourAgeDifference = yourAge1 - myAge1;
console.log(ourAgeDifference);
if (yourAge1 > myAge1) {
  console.log(`You are ${ourAgeDifference} older than me,`);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
a > b ? console.log("a is greater than b") : console.log("a is less then b");

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

let number3 = 99;
if (number3 % 2 == 0) {
  console.log("it's an even number");
} else if (number3 % 2 == 1) {
  console.log("it is an odd number");
}

// Exercises: Level 2

//1. Write a code which can give grades to students according to theirs scores:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let number = 60;
if (number == 100 || number >= 80) {
  console.log("A");
} else if (number == 79 || number >= 70) {
  console.log("B");
} else if (number == 69 || number >= 60) {
  console.log("C");
} else if (number == 59 || number >= 50) {
  console.log("D");
} else if (number == 0 || number <= 49) {
  console.log("F");
} else {
  console.log("Enter a Vaiid score");
}

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "February";
if (month == "September" || month == "October" || month == "November") {
  console.log("The season is Autumn");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("The season is Winter");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("The season is Spring");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("The season is Summer");
} else {
  console.log("invalid month");
}
//3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let day = "SaturDay";

switch (day) {
  case "Saturday":
  case "SaturDay":
    console.log("Saturday is a weekend.");

    break;
  case "Friday":
  case "FriDay":
    console.log("Friday is a working day.");
    break;

  default:
    console.log("invalid");
    break;
}
// Exercises: Level 3
//1. Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
month = "February";
switch (month) {
  case "January":
  case "JANUARY":
    console.log("January has 31 days");
    break;
  case "February":
  case "FEbruary":
    console.log("February has 28 days");
    break;
  case "September":
  case "April":
  case "June":
  case "November":
    console.log("It has 30 days");
    break;

  default:
    console.log("Enter a valid month");
    break;
}

//2. Write a program which tells the number of days in a month, now consider leap year.
month = "February";
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("It has 31 days");
    break;
  case "February":
    console.log("It has 29 days");
    break;
  case "September":
  case "April":
  case "June":
  case "November":
    console.log("It has 30 days");
    break;

  default:
    console.log("Enter a valid month");
    break;
}
