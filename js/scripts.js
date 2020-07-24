$(document).ready(function(){
    $("button#grey").click(function(){
        $("body").removeClass();
        $("body").addClass("grey");
});
    $("button#green").click(function(){
        $("body").removeClass();
        $("body").addClass("green");
    });
    $("button#yellow").click(function(){
        $("body").removeClass();
        $("body").addClass("yellow");
    });
    $("button#blue").click(function(){
        $("body").removeClass();
        $("body").addClass("blue")
    });
});

var add = function(number1, number2) {
    return number1 + number2;
    };
var subtract = function(number1, number2) {
    return number1 - number2;
    };
var multiply = function(number1,number2) {
    return number1 * number2;
    };
var divide = function(number1,number2) {
    return number1 / number2;
    };

$(document).ready(function(){
$(document).submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
});
});
$(document).ready(function(){
    $(".clickable").click(function(){
        $("#hide").fadeOut();
        $("#reveal").fadeIn(2000);
    });
});