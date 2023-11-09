let add=(x,y)=>x+y;
try{
    result=add(10,20);

}
catch (e){
    console.log(e.message);
}
finally{
    console.log({result})
}