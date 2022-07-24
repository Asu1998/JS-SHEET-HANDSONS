//Q1. Write the code to access element which is having id as "text"
// Ans:

const elementOne = document.getElementById("text");
console.log(elementOne.innerText);

//Q2. Write the code to access element which is having tag as "h1"
// Ans:

const elementTwo = document.getElementsByTagName("h1");
console.log(elementTwo[0].innerText);

//Q3. Write the code to access element which is having class as "box"
// Ans:

const elementThree = document.getElementsByClassName("box");
console.log(elementThree[0].innerText);

//Q4. "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
// Ans:

console.log(elementTwo[0].innerText);
elementTwo[0].innerText = 'Hello World';

//Q5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
// Ans:

function change(){
    document.getElementById("main").style.flexDirection = "column";
};

//Q6. What’s the difference between window vs document?
// Ans:



//Q7. "<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
// Ans:

elementTwo[0].style.color = "red";
elementTwo[0].id = "heading";
elementTwo[0].innerText = "Hello";
console.log(elementTwo[0].outerHTML);

//Q8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
// Ans:

function changeText() {
    document.getElementsByClassName("wlcm")[0].innerText = "Welcome to Elevation Academy !!"
}

//Q9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// Ans:

function clock(){
    var hms = new Date();
    var hour = hms.getHours();
    var min = hms.getMinutes();
    var sec = hms.getSeconds();
    var apm = document.getElementById("apm");

    if(hour >= 12){
        apm.innerText = 'PM';
    }
    else{
        apm.innerText = 'AM';
    }
    if(hour > 12){
        hour = hour - 12;
    }
    if((hour+"").length === 1){
        hour = "0"+hour;
    }
    if((min+"").length === 1){
        min = "0"+min;
    }
    if((sec+"").length === 1){
        sec = "0"+sec;
    }
    document.getElementById("hour").innerHTML = hour + `<br>hour`;
    document.getElementById("min").innerHTML = min + `<br>min`;
    document.getElementById("sec").innerHTML = sec + `<br>sec`;    

    
};
setInterval(clock,1000);

//Q10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
// Ans:

let dropDown = document.getElementById("drop");
var opt = dropDown.options[drop.selectedIndex].text;
function selectYear(){
    opt = dropDown.options[drop.selectedIndex].text;
    document.getElementById("select").innerText = opt;
}

//Q11. "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"
// Ans:

