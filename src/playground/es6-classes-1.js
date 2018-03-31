class Person {
    constructor(name='anonymous', age=0 ){
        this.name = name;
        this.age= age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`;
    }
    
}
class Traveler extends Person {
    constructor(name, age, homelocation){
        super(name, age)
        this.homelocation = homelocation;
    }
    hasLocation(){
        return !!this.homelocation;
    }
    getGreeting(){
       let  Greeting=super.getGreeting();
        if (this.homelocation){
           return Greeting+= `i'm visitiing from ${this.homelocation}`
            //return Greeting;
        }else {
             return Greeting;}
         
    }
}
const me = new Traveler ('Boubacar Balde', 32, 'new york');
console.log(me.getGreeting());
// console.log(me.getDescription());
const him = new Traveler ();
console.log(him.getGreeting());
// console.log(him.getDescription());
