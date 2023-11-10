function cmToinch(length){
    return length/2.54;
}

function inchTocm(length){
    return length*2.54
}

function convert(fn, length){
    return fn(length);

}

let inches=convert(cmToinch, 10);
console.log(inches)

let cent=convert(inchTocm,10);
console.log(cent)

