// Exercises: Level 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Uduak";
let lastName = "Udo";
let country = "Nigeria";
let city = "Lagos";
let age = 21;
let isMarried = false;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

//2. Check if type of '10' is equal to 10
let num2 = "10";
let num3 = 10;
console.log(num2 === num3);

//3. Check if parseInt('9.8') is equal to 10
let num4 = parseInt("9.8");
console.log(num4 === 10);

//4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log(true);
console.log(4 > 3);
console.log("" == "");
console.log(NaN == NaN);
console.log(false);
console.log(10 === "10");

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
let py = "python";
let jargon = "jargon";
console.log(py.length === jargon.length);

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
let dragon = "dragon";
console.log(4 > 3 && 10 < 12);
console.log(4 < 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(py.includes("on"));
console.log(dragon.includes("on"));

//7. Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

// Exercises: Level 2

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = 5;
let height = 8;
let area = 0.5 * base * height;
console.log(area);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let sideA = 4;
let sideB = 5;
let sideC = 6;
let perimeterOfTriangle = sideA + sideB + sideC;
console.log(perimeterOfTriangle);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = 4;
let width = 6;
let areaOfRectangle = length * width;

let perimeterOfRectangle = 2 * (length + width);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = 4;
let PI = 3.14;
let areaOfACircle = PI * r * r;
console.log(areaOfACircle);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 10;
let y = 2 * x - 2;
console.log(y);

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 4,
  x2 = 5,
  y1 = 6,
  y2 = 8;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

//7. Compare the slope of above two questions.
let slope1 = y2 - y1;
let slope2 = x2 - x1;
console.log(slope1 === slope2);

//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
y = 0;
x = 2;
x2 = 1;
let result2 = y * (y = x2 + 6 * x + 9);
console.log(result2);

//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let rate = 50;
let numberOfHour = 5;
let totalPay = rate * numberOfHour;
console.log(totalPay);

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = 40;
let rateperHour = 28;
let weeklyEarning = hours * rateperHour;
console.log("Your weekly earning is: " + weeklyEarning);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myNamee = "Uduak";
if (myNamee.length > 7) {
  console.log("My name is long");
} else {
  console.log("My name is short");
}

//11. Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
firstName = "Uduak";
lastName = "Udo";
if (firstName.length >= lastName.length) {
  console.log("You first name, Uduak is longer than your family name, Udo");
}

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = 250;
let yourAge = 25;
let totalAge = myAge - yourAge;
console.log(totalAge);
if (myAge > yourAge) {
  console.log(`I am  ${totalAge} years older than you`);
}

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive
const datee = new Date();
let currentYear = datee.getFullYear();
console.log(currentYear);
let birthYear = 2010;
let presentAge = currentYear - birthYear;
console.log(presentAge);
if (presentAge >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("wait till you are 18");
}

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let nowDate = new Date();
console.log(nowDate);
let currentYear2 = nowDate.getFullYear();
console.log(currentYear2);
const enterBirthYear = 2010;
const ageNow = currentYear2 - enterBirthYear;
console.log(ageNow);
let legalAge = 18;
let validAge = legalAge - ageNow;
if (validAge >= 18) {
  console.log("You are eligible to vote");
}
console.log(validAge);
if (ageNow < legalAge) {
  console.log(
    "you are " +
      ageNow +
      ". You will be allowed to drive after " +
      validAge +
      " years"
  );
}

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

//15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const now = new Date();
let year = now.getFullYear();
console.log(year);
let month = now.getMonth();
console.log(month);
let day = now.getDate();
console.log(day);
let hour = now.getHours();
console.log(hour);
let min = now.getMinutes();
console.log(min);
let readableTimeFormat = `${year}-${month}-${day} ${hour}:0${min}`;
console.log(readableTimeFormat);

let time = new Date();
let day1 = time.getDate();
console.log(day1);
let month1 = time.getMonth();
console.log(month1);
let year1 = time.getFullYear();
console.log(year1);
let hour1 = now.getHours();
console.log(hour1);
let min1 = now.getMinutes();
console.log(min1);
let readableTimeFormat1 = `${day1}\\${month1}\\${year1}   0${hour1}:${min1}`;
console.log(readableTimeFormat1);
// Exercises: Level 3
//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const timee = new Date();
console.log(timee);
let year2 = timee.getFullYear();
console.log(year2);
let month3 = timee.getMonth();
console.log(month3);
let dayee = timee.getDay();
console.log(dayee);
let hour3 = timee.getHours();
console.log(hour3);
let minn = timee.getMinutes();
console.log(minn);
let dateToday = `${year2}-0${month3}-0${dayee}  0${hour3}:${minn}`;
console.log(dateToday);
