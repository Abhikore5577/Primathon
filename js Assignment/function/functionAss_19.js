//Sum of digits of a number

function sumDigits(num){
    if(num==0){
        return 0;
    }
    return num%10 + sumDigits(parseInt(num/10))
}

console.log(sumDigits(123))