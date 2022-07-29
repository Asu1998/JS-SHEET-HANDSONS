//Q1. Write one example explaining how you can write a callback function ?
// Ans:
const getEmpId = () =>{
    setTimeout(() => {
        console.log("Fetching the Data's 3 secs");
        setTimeout(() => {
            let empDetails = {
                fName: "Asutosh",
                lName: "Nayak",
                age: 24,
            }
            console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age}`);
            setTimeout(() => {
                empDetails.gender = "Male";
                console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age} and the gender is ${empDetails.gender}`);
            }, 3000);
        }, 3000);
    }, 1000);
}
getEmpId();

//Q2. "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Ans:
const getNumbers = () =>{
    setTimeout(() =>{
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7");
                            }, 2000);
                        }, 3000);
                    }, 4000);
                }, 5000);
            }, 6000);
        }, 7000);   
    })
}
getNumbers();

//Q3. Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// Ans:


//Q4. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// Ans:
let promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => {
        setTimeout(() => {
            console.log('1');
        }, 1000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('2');
        }, 2000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('3');
        }, 3000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('4');
        }, 4000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('5');
        }, 5000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('6');
        }, 6000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('7');
        }, 7000);
    });

//Q5. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
// Ans:
function promise(condition){
    let conditions = new Promise(function(resolve,reject){
        (condition == 'yes')? resolve('Promise Resolved') : reject('Promise Rejected'); 
    })
    return conditions;
}
promise('yes')
.then(data => console.log(data)).catch(err=>console.log(err));

//Q6. Create examples to explain callback function
// Ans:
function callBack() {
    console.log('I am callback function');
}

//Q7. Create examples to explain callback hell function
// Ans:
// const getNumbers = () =>{
//     setTimeout(() =>{
//         console.log("1");
//         setTimeout(() => {
//             console.log("2");
//             setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                     console.log("4");
//                     setTimeout(() => {
//                         console.log("5");
//                         setTimeout(() => {
//                             console.log("6");
//                             setTimeout(() => {
//                                 console.log("7");
//                             }, 2000);
//                         }, 3000);
//                     }, 4000);
//                 }, 5000);
//             }, 6000);
//         }, 7000);   
//     })
// }
// getNumbers();

//Q8. Create examples to explain promises function
// Ans:
// const getEmployeeDetails = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let empDetails = {
//                 fName : "Ravi",
//                 lName : "Patel",
//                 age : 24,
//             }
//             resolve(`The id of employee is ${data} and name of the Employee is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age}`);
//         },2000,data)
//     });
// };

// getId
//     .then((id)=>{
//         console.log('The id is', id);
//         getEmployeeDetails(id[1]).then((data) => {
//             console.log('the data is', data);
//         })
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     // .finally(() => {
//     //     console.log('End of promise chaining');
//     // });


//Q9. Create examples to explain async await function
// Ans:


//Q10. Create examples to explain promise.all function
// Ans:

