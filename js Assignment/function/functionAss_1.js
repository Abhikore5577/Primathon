//WAF to sum all the number from 1 to n;
sum=0;
function add(n){
for (i=0; i<=n; i++){
    sum=sum+i;
}
return sum;
}

console.log(add(10))