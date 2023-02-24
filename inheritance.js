/*

    This is an example of the single level inheritance in javascript.
    super(); is the special concept of javascript in which you can access from the main class

*/



class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I\'m a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WEEEEEEEEEEEE I\'m a ${this.type}`);
    }
}

class Deepak extends Wizard{
    constructor(name, type){
        super(name, type);
    }
    hello(){
        console.log(`This is Deepak Chaudhary ${this.name}`);
    }
}

const wizard1 = new Wizard('Deepak', 'Coder');
const wizard2 = new Wizard('Aayush', 'Student');
const wizard = new Deepak('Ram', 'speaker');

wizard.hello(); // From here you can access the main class through extended class.