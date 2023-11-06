num=246;
prod=1;

while(num>0){
    rem=num%10;
    prod=prod*rem;
    num=parseInt(num/10)

}
console.log(prod)