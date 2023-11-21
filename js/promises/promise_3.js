
let mypromise=new Promise(function(resolve, reject){
    resolve(Promise.reject('test'))
});

mypromise.
then(function(){
    console.log("Promise fulfilled")
})
.catch(function(error){
    console.log("promise is rejeced and error is", error)
})