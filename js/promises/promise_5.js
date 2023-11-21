let a=10; 
let b=20;
let result=30;

let mypromise=new Promise(function(resolve, reject){
    if(a+b===result){
        resolve(`yes,${a}+${b}is equal to ${a+b}`)
    }
    else{
        reject(`no, ${a}+${b}is not equal to ${a+b}`)
    }
})
console.log(mypromise)