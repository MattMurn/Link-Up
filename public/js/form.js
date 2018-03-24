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
            var newAnswer = getAnswersSelect(i);
            if (newAnswer != undefined) {
                answers.push(newAnswer);
            }
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
function getAnswersSelect(i) {
    // Get the form-input element
    var thisButton = $(`.form-input-button[option-index=${i}]`);
    
    // Is this one of the user's selections?
    var isSelected = thisButton.attr("user-selected");

    if (isSelected === "yes") {
        // Get answer index
        var thisIndex = thisButton.attr("option-index");
        
        // Get answer text and store into answer, then return
        var answer = thisButton.find(".option-text").text();
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

    // Get the contact ID
    var contactCol = $("#question-header-text").attr("contact-col");

    // Send data to the server
    $.ajax({
        url: `/api/addnew/${questionId}/${answer}/${contactCol}`,
        type: "POST"
    });
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

    });

    // Submit answers on this page and go to the next question
    $("#next-button").click(function() {
        console.log('got here');
        postAnswerToDatabase();

        // Get the contact ID
        var contactId = $("#question-header-text").attr("contact-id");

        // Get current question ID
        var thisQuestionId = $("#question-header-text").attr("question-id");
        var nextQuestionId = Number(thisQuestionId) + 1;

        window.location.href = `./${nextQuestionId}`
    });

    // Submit answers on this page skpi the rest of the questions
    $("#done-button").click(function() {
        postAnswerToDatabase();
        window.location.href = `../`
    });
});