$(document).ready(function () {
    $(".my-menu li:nth-child(2)").slideUp();
    $("#click-to-show").on("click", function (event) {
        console.log(event);
        // $("#my-div").show();
        // $("#my-div").hide();
        $("#my-div").toggle();

        //slideUp
        //slideDown
        //slideToggle
        
        event.preventDefault();
    });

    $("#toggle-div-a").on("click", function () {
        $("#toggle-div").slideToggle();
    });

    $("nav a").on("click", function () {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
});

