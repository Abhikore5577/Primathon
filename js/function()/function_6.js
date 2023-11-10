function add(){
    sum=0;
    for(i=0; i<arguments.length; i++){
        sum=sum+arguments[i];
    }
    return sum;

}

console.log(add(1,2))
console.log(add(1,2,3,4,5))