$(document).ready(function () {

    var compiled = _.template(
        "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
        "<div class='movie-info'>" +
        "<h3 class='movie-title'>" +
        "<%= movieTitle %>" +
        "</h3>" +
        "<p class='movie-director'>" +
        "<%= movieDirector %>" +
        "</p>" +
        "</div>" +
        "</div>"
    );

    $.getJSON("raw.js", function (data) {
        var i, html = "";
        //console.log(data)
        for (i = 0; i < data.movies.length; i++) {
            html += compiled(data.movies[i]);
        }
        $("#movies").append(html);
    });


});