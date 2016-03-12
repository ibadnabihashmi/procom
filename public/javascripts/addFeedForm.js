$(document).ready(function($) {
    $("#addFeedForm #submit").click(function() {
        var time= $("input#time").val();
        if(time== ""){
            $("#error").fadeIn().text("Name required.");
            $("input#time").focus();
            return false;
        }
        var news= $("input#news").val();
        if(news== ""){
            $("#error").fadeIn().text("Email required");
            $("input#news").focus();
            return false;
        }
        function success(){
            console.log("success is called here");
        }
        return false;
    });
});