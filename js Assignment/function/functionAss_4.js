//fibonacci series
let n1=0;
n2=1;
let n3;
let fibo=0;
function fib(n){
    console.log(n1+" "+n2);
    n3=n1+n2;
    console.log(""+n3);
    n++
    n1=n2;
    n2=n3;
    return n

}
console.log(fib(10))



