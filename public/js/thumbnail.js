// Toggle the clicked element's "user-selected" attribute to either "yes" or "no"
function toggleSelected(element, isCheckbox) {
    // Find out if the thumbnail is currently selected or not
    var selected = element.attr("user-selected");
    
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
    element.attr("user-selected", selected);
}

// For OneClick template, submit data once a single thumbnail has been clicked



$(document).ready(function() {
    // Change the element attribute so it is known which thumbnail(s) are selected
    $("a.thumbnail").click(function() {
        // Select the container element houseing the thumbnail
        var element = $(this).parent();

        // Check if checkbox
        var isCheckbox = element.attr("is-checkbox");

        // Toggle user-selected attribute(s) to yes or no
        toggleSelected(element, isCheckbox);
        
    });

    // Checkbox submission code here submits all user answers after clicking the submit button
});