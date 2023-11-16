//Total sum of an array

let arr=[2,4,6,8,10,12] //42
function arraySum(i, arr){
    if(i>=arr.length){
        return 0
    }
    return arr[i]+ arraySum(i+1, arr)
}
console.log(arraySum(0, arr))


function anotherMethodSum(num1, num2){
    return num1+num2;
}

result=arr.reduce(anotherMethodSum);
console.log(result)