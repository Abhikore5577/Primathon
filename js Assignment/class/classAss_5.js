//Create a class Dog that inherits all the properties and method of Pet class. It has a property breed.

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    petinfo(){
        console.log(`I have a pet. Its name is ${this.name}. Its ${this.age} years old.`)
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed=breed;
    }
    info(){
        console.log(this.petinfo() +` It is from ${this.breed} breed` )
    }
}

let d=new Dog("Harlya", 10, "German Sheffard")
d.info();