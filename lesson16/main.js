$(document).ready(function () {
    $("#aj").on("click", function () {
        $.get("abc.html", function (data) {
            console.log("ajax called")
            $("body").append(data)
        });
    });
});