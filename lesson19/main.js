$(document).ready(function () {
    var butt = $("#press")[0];
    console.log(butt, "jquery");

    var butt = document.getElementById("press");
    console.log(butt.tagName, "java script");

    var butt = document.querySelector("#press");

    butt.onclick = function () {
        console.log("button clicked");
    };

    // Modern Javascript
    butt.addEventListener("click", function (params) {
        console.log("clicked event listner");
    });
    butt.addEventListener("click", function (params) {
        console.log("clicked event listner 2");
    });

});

