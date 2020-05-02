$(document).ready(function () {
    $(".bigger").on("click", function () {
        var el = $(this);

        var module = el.parent();

        module.toggleClass("expended")

        // Swap expanded state
        module.attr("data-state") == "expanded"
            ? module.attr("data-state", "")
            : module.attr("data-state", "expanded");

        // Swap button text.
        el.text() == el.data("text-swap")
            ? el.text(el.data("text-original"))
            : el.text(el.data("text-swap"));

    });
});