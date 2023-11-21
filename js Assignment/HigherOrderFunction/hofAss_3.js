// Write a function to filter out the age lesser than 5 and and greater than 10.
const ages = [1, 2, 4, 5, 7, 8, 10, 11, 12];

let ageFilter=ages.filter(item=>{
    return item.ages<5
})
console.log(ageFilter)