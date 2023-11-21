let count=false;

let countValue=new Promise(function(resolve, reject){
    if (count){
        resolve("There is a count value")
    }
    else{
        reject("There is a no count value")
    }
})

console.log(countValue)