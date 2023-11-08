// Truncate a string to a certain number of words.

const str = "Hello, I'm a student of Primathon Academy.";
// Expected output -
// Hello, I'm a student
// Primathon Academy.


console.log(str.split(" ").splice(0,4).join(" "))

console.log(str.split(" ").slice(5,7).join(" "))