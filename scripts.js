var time = moment();

$(document).ready(function(){
    $("button").hover(function(){
        $("button").css("class","saveBtn i:hover");
        }, function(){
        $("button").css("class","saveBtn");
    });
});