// Write a function to calculate simple interest based on the principle amount Function `simpleInt()` 

function simpleInt(principle, rate, time) {
    let finalAmount=(principle*rate*time)/100
    return finalAmount;
}

console.log(simpleInt(12000, 10,1))
console.log(simpleInt(20000,5,2)) 