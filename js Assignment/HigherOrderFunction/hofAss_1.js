// To use map, filter and reduce together:-
// => Calculate age of people from the data 
// given.
// => Filter out people with age more than 25
// => Sum up the result and return the count.
const currentYear = 2022;
const ageLimit = 25;
let birthYear;
const peopleData = [{
 name: 'A',
 birthYear: 1996
},{
 name: 'B',
 birthYear: 1997,
},{
 name: 'C',
 birthYear: 1998,
},{
 name: 'D',
 birthYear: 1999,
},{
 name: 'E',
 birthYear: 2000,
},{
 name: 'F',
 birthYear: 1995,
},{
 name: 'G',
 birthYear: 1994,
}];



result=peopleData.map(item=>{currentYear-birthYear}).filter(item=>{ageLimit>25})
console.log(result)