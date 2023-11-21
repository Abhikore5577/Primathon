//Create a class Pet with properties name and age.

class Pet{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    infoPet(){
        console.log(`The age of ${this.name} is ${this.age} years` )
    }
}

let d=new Pet('harlya', 10);
d.infoPet();