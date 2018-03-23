// Function to get answers for any type of question from elements
function submitAnswers() {
    // Get the number of possible answers for this page
    var numQuestions = $("#question-header-text").attr("num-questions");

    // Declare array for storing answers
    var answers = [];
    
    // Get question type
    var questionType = $("#question-header-text").attr("question-type");
    
    // Loop for each possible answer
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
    answers = answers.join();
    return answers;
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

// Get answer(s) from userEntry template
function getAnswersUserEntry() {
    var answer = $("#answer-text").text();
    return answer;
}

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

function postAnswerToDatabase() {
    // Get the question ID
    var questionId = $("#question-header-text").attr("question-id");

    // Get answers from the page
    var answer = submitAnswers();

    // Get the loop index to load the next page
    var questionIndex = $("#question-header-text").attr("question-index");

    // Get the contact ID
    var contactId = $("#question-header-text").attr("contact-id");

    // Send data to the server
    $.ajax(`/api/addnew/${questionId}/${answer}/${contactId}`, {
        type: "POST"
    }).then(function() {

    });
}

function loadNextQuestion() {

}

function loadHomePage() {

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

        // // If this question can only have 1 answer, immediately submit
        // if ($("#question-header-text").attr("question-type") === "selectOne") {
        //     submitAnswers();
        // }
    });

    // Submit answers on this page and go to the next question
    $("#next-button").click(function() {
        postAnswerToDatabase();
        loadNextQuestion();
    });

    // Submit answers on this page skpi the rest of the questions
    $("#done-button").click(function() {
        postAnswerToDatabase();
        loadHomePage();
    });
});