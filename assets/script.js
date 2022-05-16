const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("choice-text"));
const choiceEl = document.querySelector(".choices");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



var questions = [
    {
        question: "What is the difference between <h2> and <h4>?",
        answers: [
            { text: "There is no difference", correct: false},
            { text: "<h4> is larger", correct: false},
            { text: "<h2> is more important and therefore larger", correct: true },
            { text: "They are one size apart", correct: false }
        ]},
        {
        question: "How do you create a new Git repository?",
        answers: [
            { text: "git init", correct: true},
            { text: "git checkout", correct: false},
            { text: "git status", correct: false},
            { text: "git add", correct: false}
        ]},
        {
        question: "How do you leave hidden comments in HTML?",
        answers: [
            { text: "/* */", correct: false},
            { text :"<!-- -->", correct: true},
            { text: "//", correct: false},
            { text: "None of the above", correct: false}
        ]},
        {
        question: "How many ways are there to write a color in CSS?",
        answers: [
            { text: "one", correct: false},
            { text: "two", correct: false},
            { text: "three", correct: true},
            { text: "four", correct: false}
        ]},
        {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false},
            { text: "Colorful Style Sheets", correct: false},
            { text: "Creative Style Sheets", correct: false},
            { text: "Cascading Style Sheets", correct: true}
        ]},
        {
        question: "Which HTML element is used to input Javascript?",
        answers: [
            { text: "<script>", correct: true},
            { text: "<js>", correct: false},
            { text: "<scripts>", correct: false},
            { text: "<javascript>", correct: false}
        ]},
        {
        question: "Which is NOT a primitive data type of Javascript?",
        answers: [
            { text: "Boolean", correct: false},
            { text: "Number", correct: false},
            { text: "String", correct: false},
            { text: "Array", correct: true}
        ]},
        {
        question: "Which of these is a basic boolean operator?",
        answers: [
            { text: "AND", correct: false},
            { text: "NOT", correct: false},
            { text: "OR", correct: false},
            { text: "All of the above are basic boolean operators", correct: true},
        ]},
        {
        question: "How would you remove the line under a hyperlink using CSS?",
        answers: [
            { text: "text-decoration: plain", correct: false},
            { text: "hyperlink: remove", correct: false},
            { text: "text-decoration: none", correct: true},
            { text: "You cannot remove the line under a hyperlink using CSS properties."}
        ]},
        {
        question: "What CSS rule will make flex items evenly distributed horizontally?",
        answers: [
            { text: "justify-content: center", correct: false},
            { text: "justify-content: space-between", correct: true},
            { text: "justify-content: space-around", correct: false},
            { text: "justify-content: stretch", correct: false}
        ]}
]

const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 10;

var timer = document.querySelector("#countdown");
var startBtn = document.querySelector("button");

var quizContainer = document.getElementById("hidden");
    if (quizContainer.style.display === "none") {
        quizContainer.style.display === "none";
    }
    else {
        quizContainer.style.display = "none";
    }

function countdown () {
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            // highScores ();
        }
        if (timeLeft >= 1) {
            timer.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
            // startQuiz ();
        }
    }, 1000);
};

function startQuiz () {
    var frontPage = document.getElementById("visible");
    if (frontPage.style.display === "none") {
        frontPage.style.display === "block";
    }
    else {
        frontPage.style.display = "none";
    }

    if (quizContainer.style.display === "block") {
        quizContainer.style.display === "none";
    }
    else {
        quizContainer.style.display = "block";
    }

    countdown();
    handleQuestion();





    
    score = 0;
    availableQuestions = [...questions];

    
    
    
    console.log(questions);
    console.log(choices);
    console.log(questions[0].answers);

    if (correct=true) {
        // answer turns green, next question appears and 5 points added to score
    }
    if (correct=false) {
        // answer turns red, next question appears and 10 seconds subtracted from timeLeft
    }

    // when all questions answered or timer runs out run alert saying "Finished!"

    // once OK clicked on alert, load high score page to save high score
};
var answerButton;

function handleQuestion() {
    var currentQuestion = questions[questionCounter];
    console.log("here" + currentQuestion.answers);
    question.textContent = currentQuestion.question; 

    // choices.textContent = currentQuestion.answers.text[0];

    currentQuestion.answers.forEach(function(answers, index){
        answerButton = document.createElement("button");
        answerButton.setAttribute("class", "choices");
        answerButton.setAttribute("value", answers);
        // answerButton.setAttribute("trueFalse", answers.correct);
        answerButton.textContent = answers;
        answerButton.onclick = nextQuestion; 
        choiceEl.appendChild(answerButton);
    });
    console.log(answerButton.getAttribute("value"));
};

function nextQuestion() {
    var isCorrect = answerButton.getAttribute("value");
    console.log(isCorrect);
    // if (correct )
};
// function saveHighscore () {
//     var highscore = {
//         name: "initials",
//         score: 
//     }
//     localStorage.setItem("highscore", JSON.stringify(highscore));
// }

// function showHighscore () {

// }


startBtn.addEventListener("click", startQuiz);



