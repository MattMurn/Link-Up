$(document).ready(function() {
    $("a.thumbnail").click(function() {
        // Select the container element houseing the thumbnail
        var containerDiv = $(this).parent();
        // Check if checkbox
        var isCheckbox = containerDiv.attr("is-checkbox");
        // Find out if the thumbnail is currently selected or not
        var selected = containerDiv.attr("user-selected");
        // Toggle the "user-selected" attribute
        if (selected === "yes") {
            selected = "no";
        }
        else {
            selected = "yes";
        }
        // If not a checkbox, reset all other elements to not selected
        if (isCheckbox === "no") {
            $(".form-input-button").attr("user-selected", "no");
        }
        containerDiv.attr("user-selected", selected);
    });
});