// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
//1. Declare an empty array;
let emptyArray = Array(4);
console.log(emptyArray);
//2. Declare an array with more than 5 number of elements
let fruits = ["orange", "pineapple", "Apple", "Pawpaw", "carrot"];
console.log(fruits);
fruits;
//3. Find the length of your array
console.log(fruits.length);
//4. Get the first item, the middle item and the last item of the array
console.log(fruits[0]);
let lastItem = fruits.length - 1;
console.log(lastItem);
console.log(fruits[4]);
console.log(fruits[2]);
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = Array();
mixedDataTypes[0] = 1;
mixedDataTypes[1] = 2;
mixedDataTypes[2] = "travelling";
mixedDataTypes[3] = "shoping";
mixedDataTypes[4] = "cooking";
mixedDataTypes[5] = true;
mixedDataTypes[6] = false;
console.log(mixedDataTypes.length);
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  " Google",
  " Microsoft",
  " Apple",
  " IBM",
  " Oracle",
  " Amazon",
];
console.log(itCompanies);
//7. Print the array using console.log()
console.log(itCompanies);
//8. Print the number of companies in the array
console.log(itCompanies.length);
//9. Print the first company, middle and last company
let lastComp = itCompanies.length - 1;
console.log(itCompanies[0], itCompanies[4], itCompanies[lastComp]);
//10. Print out each company
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);
//11. Change each company name to uppercase one by one and print them out
let Caplock = itCompanies[0].toUpperCase();
console.log(Caplock);
let Caplock1 = itCompanies[1].toUpperCase();
console.log(Caplock1);
let Caplock2 = itCompanies[2].toUpperCase();
console.log(Caplock2);
let Caplock3 = itCompanies[3].toUpperCase();
console.log(Caplock3);
let Caplock4 = itCompanies[4].toUpperCase();
console.log(Caplock4);
let Caplock5 = itCompanies[5].toUpperCase();
console.log(Caplock5);
let Caplock6 = itCompanies[6].toUpperCase();
console.log(Caplock6);

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies}, are big IT companies.`);
//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies = [
  "Facebook",
  " Google",
  " Microsoft",
  " Apple",
  " IBM",
  " Oracle",
  " Amazon",
];
console.log(itCompanies);
// let companies = prompt("enter name of company");
let check = itCompanies.includes();
if (check === true) {
  console.log(companies);
} else {
  console.log("not available");
}

//14. Filter out companies which have more than one 'o' without the filter method

console.log(itCompanies);
// let zeroCompanies = []
let finalCompanies = [];
for (let i = 0; i <= itCompanies.length - 1; i++) {
  let checkingCompanies = itCompanies[i];
  let currentCompArr = checkingCompanies.match(/o/g);
  if (currentCompArr != null) {
    if (currentCompArr.length >= 2) {
      finalCompanies.push(checkingCompanies);
    }
  }
}
for (let y = 0; y <= finalCompanies.length - 1; y++) {
  console.log(finalCompanies[y]);
}

//15. Sort the array using sort() method
console.log(itCompanies.sort());

//16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17. Slice out the first 3 companies from the array
console.log(itCompanies.splice(0, 3));
console.log(itCompanies);

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(1, 1));
console.log(itCompanies);

//19. Slice out the middle IT company or companies from the array

//20. Remove the first IT company from the array
console.log(itCompanies);
console.log(itCompanies.shift());

//21. Remove the middle IT company or companies from the array

//22. Remove the last IT company from the array
console.log(itCompanies);
console.log(itCompanies.pop());

//23. Remove all IT companies

// Exercise: Level 2
//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
//3. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

//4. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

//5. Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

//1. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());

//2. Find the middle country(ies) in the countries array

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
