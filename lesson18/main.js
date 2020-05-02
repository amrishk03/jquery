$(document).ready(function () {
    $.getJSON(
        "file.json",
        function (data) {
            // Success! Do stuff with data.
            console.log(data.glossary.title);
        }
    );
});

