// Create a method print which prints “I have a pet. Its name is [petname]. Its[pet age] years old.”

class Pet{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    petInfo(){
        console.log(`I have a pet. Its name is ${this.name}. Its ${this.age} years old.`)
    }
}

let d=new Pet('Harlya', 10);
d.petInfo();
