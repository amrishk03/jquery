$(document).ready(function () {
    // Getter
    var h = $("#measure-me").height();
    var oh = $("#measure-me").outerHeight();
    console.log(h, oh);

    // Setter
    $("#measure-me").height(100);

    var h = $("#measure-me").height();
    var oh = $("#measure-me").outerHeight();
    console.log(h, oh);
});