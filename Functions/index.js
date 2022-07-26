//Q1. Create one function with zero parameter having a console statement;
// Ans:
function zeroParams (){
    console.log("Zero-Parameters");
}
zeroParams();

//Q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
// Ans:
function sum (a,b){
    console.log(a+b);
}
sum(3,4);

//Q3. Create one arrow function
//Ans:
const arrowFunction = () => {
    console.log("This is also known as FatArrow Function");
}
arrowFunction();

//Q4. "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
}
girl ();
// Ans:
//Undefined

//Q4. "Print output: 
var x = 21;
girls ();
console.log(x)
function girls() {
    console.log(x);
    var x = 20;
};
// Ans:
// Undefined

//Q5. Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };
// Ans:
//  Uncaught ReferenceError: a is not defined at index.js:46:1


//Q6. Write a function that accepts parameter n and returns factorial of n
// Ans:
let x = 1;
const factorial = (n) =>{
    if (n == 0 || n == 1){
        console.log(x);
    }else{
        for(let i= n; i>=1; i--){
            x = x * i;
        }
        console.log(`Factorial of ${n} is ${x}.`);
    }
}
factorial(3);//6

