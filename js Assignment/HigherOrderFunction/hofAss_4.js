let diffOperation=(arr, instruction)=>{
    const output=[];
    for(i=0; i<arr.length; i++){
output.push(instruction(arr[i]))
    }
return output;
}

let addBy2=(input)=>{
    return input+2;
}

let subtractBy2=(input)=>{
    return input-2;
}

let multiplyBy2=(input)=>{
    return input*2;
}

let divideeeBy2=(input)=>{
    return input/2;
}

let addResult=diffOperation([1,2,3], addBy2)
let subtractResult=diffOperation([1,2,3], subtractBy2)
let multiResult=diffOperation([1,2,3], multiplyBy2)
let divideResult=diffOperation([1,2,3], divideeeBy2)


console.log("Add :",addResult)
console.log("Subtract :",subtractResult)
console.log("Multiply :", multiResult)
console.log("Divide :", divideResult)