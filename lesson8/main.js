$(document).ready(function () {
    $("a").on("click", function (event) {
        console.log("clicked on anchor");
        //event.preventDefault();
        //return false;
    });

    $("li").on("click", function (event) {
        console.log("clicked on ul");
        event.stopPropagation(); // Bubbleing on parent
    });
    $("ul").on("click", function (event) {
        console.log("clicked on ul");
    });
});