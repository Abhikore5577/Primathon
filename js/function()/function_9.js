let sum=0;

function sum1(n){
    for(i=0; i<=n; i++){
        sum+=i
    }
    return sum;

}

function sum2(n){
    return (n*(n+1))/2;
}

function sum3(n){
    let sum=0;
    for(i=n; i>=1; i--){
        sum+=i;
    }
    return sum;
}

console.log(sum1(10));
console.log(sum2(10));
console.log(sum3(10));
