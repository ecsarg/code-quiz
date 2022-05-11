var timer = document.querySelector('#countdown');
var startBtn = document.querySelector('#start-quiz');


function countdown () {
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            highScores ();
        }
        if (timeLeft >= 1) {
            timer.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
            quiz ();
        }
    }, 1000);
};

function quiz () {
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    const quizQuestions = [
        {
            question: "What is the difference between <h2> and <h4>?",
            answers: [
                { text: "There is no difference", correct: false},
                { text: "<h4> is larger", correct: false},
                { text: "<h2> is more important and therefore larger", correct: true },
                { text: "They are one size apart", correct: false }
            ],
            question: "How do you create a new Git repository?",
            answers: [
                { text: "git init", correct: true},
                { text: "git checkout", correct: false},
                { text: "git status", correct: false},
                { text: "git add", correct: false}
            ],
            question: "How do you leave hidden comments in HTML?",
            answers: [
                { text: "/* */", correct: false},
                { text :"<!-- -->", correct: true},
                { text: "//", correct: false},
                { text: "None of the above", correct: false}
            ],
            question: "How many ways are there to write a color in CSS?",
            answers: [
                { text: "one", correct: false},
                { text: "two", correct: false},
                { text: "three", correct: true},
                { text: "four", correct: false}
            ],
            question: "What does CSS stand for?",
            answers: [
                { text: "Computer Style Sheets", correct: false},
                { text: "Colorful Style Sheets", correct: false},
                { text: "Creative Style Sheets", correct: false},
                { text: "Cascading Style Sheets", correct: true}
            ],
            question: "Which HTML element is used to input Javascript?",
            answers: [
                { text: "<script>", correct: true},
                { text: "<js>", correct: false},
                { text: "<scripts>", correct: false},
                { text: "<javascript>", correct: faslse}
            ],
            question: "Which is NOT a primitive data type of Javascript?",
            answers: [
                { text: "Boolean", correct: false},
                { text: "Number", correct: false},
                { text: "String", correct: false},
                { text: "Array", correct: true}
            ],
            question: "Which of these is a basic boolean operator?",
            answers: [
                { text: "AND", correct: false},
                { text: "NOT", correct: false},
                { text: "OR", correct: false},
                { text: "All of the above are basic boolean operators", correct: true},
            ],
            question: "How would you remove the line under a hyperlink using CSS?",
            answers: [
                { text: "text-decoration: plain", correct: false},
                { text: "hyperlink: remove", correct: false},
                { text: "text-decoration: none", correct: true},
                { text: "You cannot remove the line under a hyperlink using CSS properties."}
            ],
            question: "What CSS rule will make flex items evenly distributed horizontally?",
            answers: [
                { text: "justify-content: center", correct: false},
                { text: "justify-content: space-between", correct: true},
                { text: "justify-content: space-around", correct: false},
                { text: "justify-content: stretch", correct: false}
            ]
        }
    ]
};

function highScores () {

}


startBtn.addEventListener("click", countdown); {
    setInterval();
    // quiz();
}