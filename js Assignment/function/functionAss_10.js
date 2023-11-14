//Reverse Number

function ReverseNum(num){
    let rev=0;
    while (num!=0){
        rev=rev*10;
        rev=rev+num%10;
        num=parseInt(num/10)
    }
    return rev;
}

console.log(ReverseNum(123));
console.log(ReverseNum(25786));
