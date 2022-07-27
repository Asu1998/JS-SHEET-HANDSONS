//Q1.
    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// Ans:
// alert(counter()); - 1 
// alert(counter()); - 2
// alert(counter()); - 3
// alert(counter()); - 4

//Q2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// Ans:
// 1
// 0

//Q3.
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// Ans:
// 3

//Q4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
// Ans:
function result(){
    let l = 5;
    return function(){
        let b = 2;
        console.log(l * b);
    };
}
let area = result();
area();

//Q5. Take a variable in outer function and create an inner function to increase the counter every time it is called
// Ans:
function outerResult(){
    let a = 0;
    return function(){
        a = a + 1;
        console.log(a);
    };
}
let y = outerResult();
y();
y();
y();

//Q6. Print Output
var b = 12;
(function () {
  alert(b);
})();
// Ans:
// 12

//Q7. 
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// Ans:
// 12

//Q8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// Ans:
//outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
//globalVar = xyz
