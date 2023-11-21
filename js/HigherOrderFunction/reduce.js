let number=[1,2,3,4,5];

let getSum=(total,num)=>{
return total+num;
}
let newArr=number.reduce(getSum);
console.log(newArr)


let arr=[1,2,3,4,5,6,7,8,9,10]

let printOdd=(num)=>{
    let newArr1=[];
    for(i=0; i<=arr.length; i++){
        if(arr[i]%2==0){
            newArr1.push(arr[i])
        }
    }
    return newArr1;
}

console.log(newArr1)