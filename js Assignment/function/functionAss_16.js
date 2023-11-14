//Write a function to find the count of a letter in a string Function 


function letterCount(str, c){
    let count=0;
    for(i=0; i<str.length; i++){
        if(str.charAt(i)==c){
            count++
        }

    }
    return count;
}

console.log(letterCount('hello', 'l'))