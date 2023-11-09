
function printPattern(n){
    console.log('For n= ', n)
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            process.stdout.write('* ')
        }
        console.log()
    }
}

printPattern(1);
printPattern(2);
printPattern(3);
printPattern(4);