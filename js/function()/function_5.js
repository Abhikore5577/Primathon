function add(a, b){
    console.log(arguments, "arguments");
    console.log("b=", b, ",a=", a);
   
    console.log("b=", a, ",a=", b);
    return a+b;
}

let result1= add(10,20);
console.log(result1)

let result2= add("10",20);
console.log(result2)

let result3= add(10,"20");
console.log(result3)

let result4= add(10,20,30);
console.log(result4)

let sum=add

let result5=sum(30,40);
console.log(result5)