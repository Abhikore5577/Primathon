let mypromise=new Promise(function(resolve, rejeced){
    reject(Promise.resolve('Test'))
})

mypromise.
then(function(){
    console.log("Promise fulfilled")
})
.catch(function(errormsg){
    console.log("promise is rejeced and error is", errormsg)
})