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

// For the select template, store the answer(s) in local storage. 
// Name of the data is the question id, and the answers are stored in an array
function submitFromSelect() {
    // Get the number of possible answers to this question from the question header element
    var numQuestions = $("#question-header-text").attr("num-questions");
    // Get the question ID as it is from the database to use as the name of this answer
    var questionId = $("#question-header-text").attr("question-id");
    // Declare array for storing answers
    var answers = [];

    // Loop for each answer possible
    for (var i = 0; i < numQuestions; i++) {
        // Get the form-input element
        var thisButton = $(`.form-input-button[option-index=${i}]`);
        // Is this one of the user's selections?
        var isSelected = thisButton.attr("user-selected");

        if (isSelected === "yes") {
            // Get answer index
            var thisIndex = thisButton.attr("option-index");
            // Push selected answer indices into array
            answers.push(thisIndex);
        }
    }
        // Store the data
        localStorage.setItem(questionId, answers);
        console.log(questionId);
        console.log(answers);
}

// For select template with checkbox=true, submit data once the submit button is pressed
function submitCheckbox() {

}


$(document).ready(function() {
    // Change the element attribute so it is known which thumbnail(s) are selected
    $("a.thumbnail").click(function() {
        // Select the container element houseing the thumbnail
        var element = $(this).parent();

        // Check if checkbox
        var isCheckbox = element.attr("is-checkbox");

        // Toggle user-selected attribute(s) to yes or no
        toggleSelected(element, isCheckbox);

        if (isCheckbox === "no") {
            submitFromSelect();
        }
        
    });
});