//Create a class Pet with properties name and age.
// Name should be public and age should be private.
class Pet{
    #age=0;
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }

    petInfo(){
        console.log(`The age of ${this.name} is ${this.age} years` )
    }

}

let d= new Pet('Harlya', 10);
d.petInfo();