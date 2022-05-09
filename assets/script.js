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

}

function highScores () {

}


startBtn.addEventListener("click", countdown); {
    startInterval();
    quiz();
}