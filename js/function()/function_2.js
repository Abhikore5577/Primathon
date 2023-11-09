function sayHi(name,age){
    console.log('Hi', name, 'you are', age, 'old now')

}

sayHi();
sayHi(30);
sayHi(30, 'Abhi')
sayHi('Abhi', 30)

let temp=sayHi('Abhi', 30);
console.log(temp)