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

// Get answer(s) from select tempalte
function getAnswersSelect(answer) {
    // Get the form-input element
    var thisButton = $(`.form-input-button[option-index=${i}]`);
    
    // Is this one of the user's selections?
    var isSelected = thisButton.attr("user-selected");

    if (isSelected === "yes") {
        // Get answer index
        var thisIndex = thisButton.attr("option-index");
        
        // Get answer text and store into answer, then return
        var answer = thisButton.attr("option-index").find(".option-text");
        return answer;
    }
}

// Get answer(s) from userEntry tempalte
function getAnswersUserEntry() {
    var answer = $("#answer-text").text();
    return answer;
}

// Function to get answers for any type of question from elements
function submitAnswers() {
    // Get the number of possible answers to this question from the question header element
    var numQuestions = $("#question-header-text").attr("num-questions");
    // Get the question ID as it is from the database to use as the name of this answer
    var questionId = $("#question-header-text").attr("question-id");
    // Declare array for storing answers
    var answers = [];
    // Get question type
    var questionType = $("#question-header-text").attr("question-type");

    // Loop for each answer possible
    for (var i = 0; i < numQuestions; i++) {
        if (questionType === "check" || questionType === "selectOne") {
            // Get answer(s) for select template
            answers.push(getAnswersSelect());
        }
        else if (questionType === "textShort" || questionType === "textLong") {
            // Get answer(s) for userEntry template
            answers.push(getAnswersUserEntry());
        }
    }
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

        if ($("#question-header-text").attr("question-type") === "selectOne") {
            submitAnswers();
        }
    });

    // Submit answers on this page and go to the next question
    $("#next-button").click(function() {
        submitAnswers();
        // Send data to the server
        $.ajax("/api/addnew/questionId/:questionId/contactId/:contactId/answer/:answer", {
            type: "POST"
        }).then(function() {
            
        })
    });

    // Submit answers on this page skpi the rest of the questions
    $("#done-button").click(function() {

    });
});