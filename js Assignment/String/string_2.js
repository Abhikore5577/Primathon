//Print only ‘javascript’ from all the programming languages.


const programmingLanguages = "Java, Javascript, Python, C, C++";

console.log(programmingLanguages.slice(6,16))
console.log(programmingLanguages.substring(6,16))



const academyName = "Primathon Academy.";
console.log(academyName.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"));
