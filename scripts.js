// Get current formatted time from moment.js
var now = moment().format('MMMM Do YYYY');

// Print formatted date to jumbotron
var headerDate = $("#currentDay");
headerDate.text(now);


// Save user input to local storage AKA Realize you should use for loops and jquery
document.getElementById("btn9am").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("9amEvent", $("#9amInput").val());
});

document.getElementById("btn10am").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("10amEvent", $("#10amInput").val());
});

document.getElementById("btn11am").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("11amEvent", $("#11amInput").val());
});

document.getElementById("btn12pm").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12pmEvent", $("#12pmInput").val());
});

document.getElementById("btn1pm").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("1pmEvent", $("#1pmInput").val());
});

document.getElementById("btn2pm").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("2pmEvent", $("#2pmInput").val());
});

document.getElementById("btn3pm").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("3pmEvent", $("#9amInput").val());
});

document.getElementById("btn4pm").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("4pmEvent", $("#4pmInput").val());

});
document.getElementById("btn9am").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("5pmEvent", $("#5pmInput").val());
});

/* Hover styling */
$(document).ready(function(){
    $("button").hover(function(){
        $("button").css("class","saveBtn i:hover");
        }, function(){
        $("button").css("class","saveBtn");
    });
});

