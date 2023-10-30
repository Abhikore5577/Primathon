y=3;
console.log(y);
var y;


var a=1;
console.log(a);
var a=2;
console.log(a);


function hoisting(){
    console.log("value of x in local scope is ", x);
}
console.log("value of x in globl scope is ", x);
var x=10;
 hoisting();



function hoistingexm(){
    p=1;
}
hoistingexm();
console.log(p);

