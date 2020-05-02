$(document).ready(function (event) {

    var data = $("#my-form").serialize();
    $.post(
        "/",
        data,
        // success
        function (data, textStatus, jqXHR) {

        }
    );

    event.preventDefault();
});