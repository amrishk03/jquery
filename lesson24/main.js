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

    // Event Handling
    $(document).on("click", ".module-movie",
        function () {
            alert("movie")
        });

    var source = $("#movie-template").html();
    var template = Handlebars.compile(source);

    console.log(template);
    for (let index = 0; index < data.movies.length; index++) {
        var html = template(data.movies[index]);
        $("#movies").append(html);
    }



});