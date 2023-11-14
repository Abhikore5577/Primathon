function gcd(a,b){
    if(a==0){
        return b;
    }
    if(b==0){
        return a;
    }
    if(a==b){
        return a;
    }
    if(a>b){
        return(a-b, b)
    }
    else{
        return(a, b-a)
    }


}
console.log(gcd(48,56))