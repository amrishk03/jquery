$(document).ready(function () {
    var nav = $("nav[role='navigation']")
        .find("li")
        .find("a")
        .css({ "color": "red" })
        .end()
        .eq(1)
        .hide()
        .end();

    nav.slideUp();

    $("a")
        .on("click", function () {

        })
        .on("blur", function () {

        });
});
