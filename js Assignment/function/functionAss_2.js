// WAF called POWER which takes in the base and exponent. if the exponent is 0, return 1

function exp(num, exponent){
    if(exponent===0){
        return 1;
    }
    let result=Math.pow(num, exponent)
    return result;
   

}
console.log(exp(5,2))
console.log(exp(5,0))
console.log(exp(7,3))

