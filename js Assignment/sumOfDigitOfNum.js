let sum=0;
num=576;

while(num>0){
rem=num%10;
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(sum);