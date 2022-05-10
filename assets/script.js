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
    const quizQuestions = [
        {
            question: "What is the difference between <h2> and <h4>?",
            answers: {
                a: "There is no difference",
                b: "<h4> is larger",
                c: "<h2> is more important and therefore larger",
                d: "They are one size apart"
            },
            correctAnswer: "c"
        },
        {
            question: "How do you create a new Git repository?",
            answers: {
                a: "git init",
                b: "git checkout",
                c: "git status",
                d: "git add"
            },
            correctAnswer: "a"
        },
        {
            question: "How do you leave hidden comments in HTML?",
            answers: {
                a: "/* */",
                b: "<!-- -->",
                c: "//",
                d: "None of the above"
            },
            correctAnswer: "b"
        },
        {
            question: "How many ways are there to write a color in CSS?",
            answers: {
                a: "one",
                b: "two",
                c: "three",
                d: "four"
            },
            correctAnswer: "c"
        },
        {
            question: "What does CSS stand for?",
            answers: {
                a: "Computer Style Sheets",
                b: "Colorful Style Sheets",
                c: "Creative Style Sheets",
                d: "Cascading Style Sheets"
            },
            correctAnswer: "d"
        },
        {
            question: "Which HTML element is used to input Javascript?",
            answers: {
                a: "<script>",
                b: "<js>",
                c: "<scripts>",
                d: "<javascript>"
            },
            correctAnswer: "a"
        },
        {
            question: "Which is NOT a primitive data type of Javascript?",
            answers: {
                a: "Boolean",
                b: "Number",
                c: "String",
                d: "Array"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of these is a basic boolean operator?",
            answers: {
                a: "AND",
                b: "NOT",
                C: "OR",
                d: "All of the above are basic boolean operators"
            },
            correctAnswer: "d"
        },
        {
            question: "How would you remove the line under a hyperlink using CSS?",
            answers: {
                a: "text-decoration: plain",
                b: "hyperlink: remove",
                c: "text-decoration: none",
                d: "You cannot remove the line under a hyperlink using CSS properties."
            },
            correctAnswer: "c"
        },
        {
            question: "What CSS rule will make flex items evenly distributed horizontally?",
            answers: {
                a: "justify-content: center",
                b: "justify-content: space-between",
                c: "justify-content: space-around",
                d: "justify-content: stretch"
            },
            correctAnswer: "b"
        }
    ];
}

function highScores () {

}


startBtn.addEventListener("click", countdown); {
    startInterval();
    // quiz();
}