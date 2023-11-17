let number=[1,2,3,4,5];

let getSum=(total,num)=>{
return total+num;
}
let newArr=number.reduce(getSum);
console.log(newArr)