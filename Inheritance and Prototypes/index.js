console.log("Working");

//Q1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

// Ans:
const objOne = {
    calcAge(){
        console.log(`This person named as ${this.name} played for ${this.club} since he was ${2022 - this.age} years old.`);
    }
}

const objTwo =  Object.create(objOne);
objTwo.name = "Messi";
objTwo.club = "Barcelona";
objTwo.age = "2009";

objTwo.calcAge();

//Q2. Write code to explain prototype chaining

// Ans:
let anyObject = {
    fname: "Christiano",
    lname:"Ronaldo",
    gender:"Male",
    age: 35,
    showInfo: function(){
        console.log(`${this.fname} ${this.lname} whose gender is ${this.gender} and age is ${this.age} is a best dribbler.`);
    }
}
console.log(anyObject);
anyObject.showInfo();

let anyObj = {
    lname: "Neymar",
}

anyObj.__proto__ = anyObject;

console.log(anyObj.lname, anyObj.gender, anyObj.age);

//Q3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

// Ans:
array = [1,2,3,4,5,5];
let result = array.reduce((acc,curr) => acc + curr, 0);
console.log(result);

//Q4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// Ans:
function objectAny (a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}
objectAny.prototype.demo = 11;
const newTwo = new objectAny("I","Will be","Dominating");
console.log(newTwo);
console.log("The objectAny" + newTwo.demo);