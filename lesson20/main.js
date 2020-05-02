$(document).ready(function () {
    var thing = $("#thing");

    console.log(thing);

    // set the data
    thing.attr("data-y", 5);
    thing.data("x", 1);

    // get the data
    console.log(thing.data("x"));

    // getter
    var value = thing.data("mydiv");
    var valueattr = thing.attr("data-mydiv");
    console.log(value);
    console.log(valueattr);

});

