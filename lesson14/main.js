$(document).ready(function () {
    //Binding DOM events
    $("#settings").on("submit", function (event) {
        //saveTheData();
        $(this).trigger("save");
        event.preventDefault();
    });

    // Custom event
    $("#settings").on("save", function () {
        console.log("Do the save");
    });

    function saveTheData() {
        ajaxSave(theData);
        showSaveMessage();
    }
});
