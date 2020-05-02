$(document).ready(function () {
    // Implicit - Implying on the list
    $("#one li").css("color", "orange");

    // Explicit
    $("#two li").each(function (i) {
        //console.log(this);
        //console.log($(this));
        var el = $(this);
        var txt = el.text();
        var numChars = txt.length;
        //console.log(numChars);
        var numChars = el.text(txt + "(" + numChars + " characters)");
    });
});