
let promise=new Promise(function(resolve, reject){
    let a='primathonAcademy';
    let b='primathonAcademy1';

    if(a==b){
        resolve();
    }
    else{
        reject()
    }
})

promise.
then(function(){
    console.log('Success, Welcome to Primathon Academy')
})
.
catch(function(){
console.log('Some error has occoured')
})