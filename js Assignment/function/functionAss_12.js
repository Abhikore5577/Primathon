//8. Flatten array of arrays using JavaScript reduce Function 

function flattenArray(arr){
    return arr.reduce((result, array)=>result.concat(array));
}

console.log(flattenArray([[1,2,3],[4,5,6],[7,8,9]]))