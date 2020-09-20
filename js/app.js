$(document).ready(function(){


    $("#schoolInformation .card").eq(0).mouseenter(function(){
        $("#schoolInformation .card img").eq(0).addClass("animateImg");
    });
    $("#schoolInformation .card").eq(0).mouseleave(function(){
        $("#schoolInformation .card img").eq(0).removeClass("animateImg");
    });
    $("#schoolInformation .card").eq(1).mouseenter(function(){
        $("#schoolInformation .card img").eq(1).addClass("animateImg");
    });
    $("#schoolInformation .card").eq(1).mouseleave(function(){
        $("#schoolInformation .card img").eq(1).removeClass("animateImg");
    });
    $("#schoolInformation .card").eq(2).mouseenter(function(){
        $("#schoolInformation .card img").eq(2).addClass("animateImg");
    });
    $("#schoolInformation .card").eq(2).mouseleave(function(){
        $("#schoolInformation .card img").eq(2).removeClass("animateImg");
    });


});