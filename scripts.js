var saveBtn = document.querySelector("button");
var event9am = localStorage.getItem("event9am");
var event10am = localStorage.getItem("event10am");
var event11am = localStorage.getItem("event11am");
var event12pm = localStorage.getItem("event12pm");
var event1pm = localStorage.getItem("event1pm");
var event2pm = localStorage.getItem("event2pm");
var event3pm = localStorage.getItem("event3pm");
var event4pm = localStorage.getItem("event4pm");
var event5pm = localStorage.getItem("event5pm");

saveBtn.addEventListener("click", function(){
    event9am.textarea = event9am;
    localStorage.setItem("event9am", event9am);
});

/* Hover styling */
$(document).ready(function(){
    $("button").hover(function(){
        $("button").css("class","saveBtn i:hover");
        }, function(){
        $("button").css("class","saveBtn");
    });
});

