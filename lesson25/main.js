var Movies = {

    init: function () {
        this.setUpTemplate();
        this.getData();
        this.bindUIActions();
    },

    setUpTemplate: function () {
        Movies.compiled = _.template(
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
    },

    getData: function () {
        $.getJSON("raw.js", function (data) {
            Movies.appendMoviesToPage(data);
        });
    },

    appendMoviesToPage: function (data) {
        var i, html = "";
        for (i = 0; i < data.movies.length; i++) {
            html += Movies.compiled(data.movies[i]);
        }
        $("#movies").append(html);
    },

    bindUIActions: function () {
        $(document).on("click", ".module-movie", function () {
            alert("movie added");
        });
    }

}

Movies.init();