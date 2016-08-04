


var score = 0;
var level = 1;
var lives = 5;
var playing = false;

var start = document.getElementById("start");
var scoreDisplay = document.getElementById("score-display");
var cells = document.querySelectorAll(".cell");

function displayScore() {
    levelUp();
    scoreDisplay.innerHTML = "Score: " + score + 
    "<span id='level-display'> Level: " + level + 
    "</span><span id='lifes-display'> Lives: " + lives + "</span>";
}

function levelUp() {
    level = Math.max(Math.floor(score / 10), 1);
}

function randomCell() {
    return Math.floor(Math.random() * 16);
}

function gameOver() {
    if (lives === 0) {
        clearInterval(getCells);
        score = 0;
        level = 1;
        lives = 10;
        playing = false;
    }
}

function activateCell() {
    var target = randomCell();
    var prevScore = score;
    cells[target].style.background = "green";
    setTimeout(function() {
        cells[target].style.background = "red";
        if (score === prevScore) {
            lives--;
            displayScore();
            gameOver();
        }
    }, 1000)
}


function animationRising() {
    cells[target].style.background = "green";
}


function animationFalling() {
    
}






start.addEventListener("click", function() {
    if (!playing) {
        playing = true;
        displayScore();
        getCells = setInterval(function() {
            activateCell();
        }, 1500);
    }
});

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (playing) {
            var cell = this;
            if (this.style.background === "green") {
                score++;
            }
            else {
                lives--;
                gameOver();
            }
            displayScore();
        }
    })
}







