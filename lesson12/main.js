$(document).ready(function () {
    $(document).ready(function () {
        $("button").on("click", moveBox);

        function moveBox() {
            // animate which is having number
            $("#myDiv").animate({
                "top": 30,
                "left": 50,
            }, 2000, function () { // Callbacks
                $("#myDiv").animate({
                    "top": 0,
                    "left": 0,
                });
            });
            // nested callback
        }

        function backToPosition() { // Callbacks
            $("#myDiv").animate({
                "top": 0,
                "left": 0,
            });
        }

    });
});