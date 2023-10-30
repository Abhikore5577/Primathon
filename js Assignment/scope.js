var test='outside';

function logIt(){
  
    console.log(test);
    var test='inside';
}
logIt();

function foo(){
    a=b=0;
    a++;
    b++;
    return a;
}

foo();
console.log(a);
console.log(b);


const name='workattech';
function printName(){
    console.log(name);

}
printName();


function printName(){
    const name2='workattech';
    console.log(name2);

}
printName();


let x=5;
if(x===5){
    const a=x;
    console.log(a);


}
console.log(a);






const stringOne='I am from the global scope';

function one(){
    const stringTwo='I am from the outer scope'

function two(){
const stringThree='workattech';

console.log(stringThree);
console.log(stringTwo);
console.log(stringOne);
console.log(stringZero);



}
two();

}
one();

