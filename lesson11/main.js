$(document).ready(function () {
    $("button").on("click", moveBox);

    function moveBox() {
        // animate which is having number
        $("#myDiv").animate({
            "top": 30,
            "left": 50,
        });
    }
});

$(function () {
    var nav = $('.nav'),
        animateTime = 500,
        navLink = $('.header .top .navLink');
    navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({ height: '0' }, animateTime);
        }
    });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}