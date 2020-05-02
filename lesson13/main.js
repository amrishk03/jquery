$(document).ready(function () {
    $("#scope").on("click", function (event) {
        console.log(event);
    });
    //$("#scope").off("click");
    // click, dbclick, mousedown, mouseup, mouseenter, mouseover
    // keydown, keyup, blur, change, 
    $("#add").on("click", function () {
        $("<textarea></textarea>").appendTo("#scope");
    });

    $("#event").one("click", function (event) {
        console.log(event);
    });
});