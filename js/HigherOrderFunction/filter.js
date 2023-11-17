let arr=[1,2,3,4,5,6,7,8,9]

let checkLessFive=(num)=>{
    return num<5;
}

let newArr=arr.filter(checkLessFive);

console.log(newArr)