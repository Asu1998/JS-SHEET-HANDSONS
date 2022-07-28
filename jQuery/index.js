//Q1. Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible
// Ans:
$(".btn1").click(function({}){
    $(".p").hide();
})
$(".btn2").click(function({}){
    $(".p").toggle();
})

//Q2. Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
// Ans:

$('.button').click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/2", //for any particular id use (/1,2 etc).
        type: "GET", //post,update & delete (Four types).
        success: function(data){
            console.log(data);
            document.getElementsByTagName("p")[0].innerText = data.title;
        }
    })
})