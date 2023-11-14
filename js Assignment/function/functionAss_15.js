// Factorial

function Factorial(num){
    if(num==1){
        return 1;
    }
    if(num==0 || num<0){
        return 0
    }
    else{
        return num*Factorial(num-1);
    }
}

console.log(Factorial(5))

