console.log("Working");

// Problem statement
//____________________________________
    
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]


// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

// ANS:-
let names = studentRecords.map( student => student.name.toUpperCase());
console.log(names);

console.log("-----------------------------------------");


// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

// ANS:-
let details = studentRecords.filter( student => student.marks > 50);
console.log(details);

console.log("-----------------------------------------");

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

// ANS:-
let show = studentRecords.filter((student => student.marks > 50) && (student => student.id > 120));
console.log(show);

console.log("-----------------------------------------");

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

// ANS:-
let sumTotal = studentRecords.reduce(((acc,curr) => acc + curr.marks),0);
console.log(sumTotal);

console.log("-----------------------------------------");

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

// ANS:-
let getNames = studentRecords.filter(student => student.marks > 50).map(student => student.name);
console.log(getNames);

console.log("-----------------------------------------");

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

// ANS:-
let sumOfMarks = studentRecords.filter(student => student.id > 120).reduce((acc,curr) => acc+curr.marks,0);
console.log(sumOfMarks);

console.log("-----------------------------------------");

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// ANS:-
let totalMarks = studentRecords.map(function(student){ 
    if(student.marks < 50)
    {
        student.marks += 15
    }
    return student;
}).filter(student => student.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks);

console.log("-----------------------------------------");

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

// ANS:-
let objOne = [ 
    {name: 'Asutosh', class: 12, rollNo : 01},
    {name: 'Manas', class: 12,rollNo : 20},
    {name: 'Abhijeet', class: 12, rollNo : 10},
    {name: 'Amrita', class: 12, rollNo : 13},
    {name: 'Ruttu', class: 12, rollNo : 35},
    {name: 'Niru', class: 12, rollNo : 26},]

    console.log(objOne);

console.log("-----------------------------------------");