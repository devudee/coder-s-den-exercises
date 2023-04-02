// DAY 2 : EXERCISES
// EXERCISE: LEVEL 1

let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(8, 13));
console.log(challenge.substr(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let socialMedia = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(socialMedia.split(","));
// question 12.
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let word =
  "You cannot end a sentence with because because because is a conjunction";
console.log(word.indexOf("because"));
console.log(word.lastIndexOf("because"));
console.log(word.search("because"));
let country = "  Nigeria  ";
console.log(country.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("a"));
let string = "30 Days of";
console.log(string.concat(" JavaScript"));
let string2 = "30 Days Of Javascript ";
console.log(string2.repeat(2));

// END OF DAY 2; LEVEL 1 EXERCISE

// DAY 2 : EXERCISES
// EXERCISE: LEVEL 2
// BEGIN HERE
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote =
  "The quote 'There is no better exercise for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let quote2 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same. \n with charity you give love, so don't give money but reach out your hand instead.\"";
console.log(quote2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = 10;
console.log(typeof "10");
console.log(Number(num));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num1 = 9.8;
let num1Float = parseFloat(num1);
console.log(num1Float);
console.log(Math.round(num1Float));

// Check if 'on' is found in both python and jargon
let py = "Python";
console.log(py.includes("on"));

let ja = "jargon";
console.log(ja.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence1 = "I hope this course is not full of jargon.";
console.log(sentence1.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
let randomNum = Math.round(Math.random() * 101);
console.log(randomNum);

// Generate a random number between 50 and 100 inclusively.
let randomNum1 = Math.floor(Math.random() * 50) + 51;
console.log(randomNum1);

// Generate a random number between 0 and 255 inclusively.
let randomNum2 = Math.floor(Math.random() * 256);
console.log(randomNum2);

// Access the 'JavaScript' string characters using a random number.
let string3 = "Javascript";
let numIndex = Math.floor(Math.random() * string3.length);
let numChar = string3.charAt(numIndex);
console.log(numChar);

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(
  " 1\t1 \t1  \t1  \t1 \n 2 \t1 \t2 \t4 \t8 \n 3 \t1 \t3 \t9 \t27 \n 4 \t1 \t4 \t16 \t64 \n 5 \t1 \t5 \t25 \t125 "
);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 =
  "you cannot end a sentence with because because because is a conjuction";
console.log(sentence2.substr(30, 24));

// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence3 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count = sentence3.match(/love/gi);
console.log(count);
let result = count.length;
console.log(result);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence4 =
  "You cannot end a sentence with because because because is a conjunction";
let count2 = sentence4.match(/because/gi);
console.log(count2);
let result1 = count2.length;
console.log(result1);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replaceAll("%", ""));
console.log(sentence.replace(/[$@&#%;]/g, ""));

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
console.log(text.match(/\d+/g));
