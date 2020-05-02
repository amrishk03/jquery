$(document).ready(function () {
    var data = {
        movies: [
            {
                movieTitle: "Ender's Game",
                movieDirector: "Gavin Hood",
                movieImage: "http://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-endersgame.jpg"
            },
            {
                movieTitle: "The Fifth Estate",
                movieDirector: "Bill Condon",
                movieImage: "http://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-thefifthestate.jpg"
            },
            {
                movieTitle: "Escape Plan",
                movieDirector: "Michale Hood",
                movieImage: "http://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-escapeplan.jpg"
            }
        ]
    }

    var index;

    for (let index = 0; index < data.movies.length; index++) {
        // creating element - Kind of template
        $("<div />", {
            class: "module module-movie",
            click: function (params) {
                alert("clicked");
            },
            css: {
                "background-image": "url(" +
                    data.movies[index].movieImage +
                    ")"
            },
            html:
                "<div class='movie-info'>" +
                "<h3 class='movie-title'>" +
                data.movies[index].movieTitle +
                "</h3>" +
                "<p class='movie-director'>" +
                data.movies[index].movieDirector +
                "</p>" +
                "</div>"
        }).appendTo("#movies")

    }
});