let dailyActivity=['work','eat', 'sleep', 'exercise']

dailyActivity.sort();

console.log(dailyActivity)

let position=dailyActivity.indexOf('work')
console.log(position)

let slicing=dailyActivity.slice(2)
console.log(slicing)

let copyArray=dailyActivity.slice();
console.log(copyArray)


let array1=[1,2,3,4,5,6];
let array2=[];

for(i=0; i<array1.length; i++){
    array2[i]=array1[i];
    
}
console.log(array2)