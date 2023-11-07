const str = "Hello World";
//str.endsWith("World"); // true
console.log(str.endsWith("World"))
const str1 = 'Cats are the best!';
 console.log(str1.endsWith('best!'));
 // Expected output: true

 console.log(str1.endsWith('best', 17));
 console.log(str1.endsWith('are', 8));
// // Expected output: true
const str2 = 'Is this a question?';
 console.log(str2.endsWith('question'));
// // Expected output: false
 const str3 = "To be, or not to be, that is the question.";
 console.log(str3.endsWith("question.")); // true
console.log(str3.endsWith("to be")); // false
 console.log(str3.endsWith("to be", 19)); // true