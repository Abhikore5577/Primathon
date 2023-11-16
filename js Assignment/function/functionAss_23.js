
function addArrays(arr1, arr2){
    return arr1.concat(arr2);
}

let test=[[1,2,3],[4,5,6],[7,8,9]];

result=test.reduce(addArrays);
console.log(result)