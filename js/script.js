


var score = 0;
var level = 1;
var lives = 10;
var playing = false;

var start = document.getElementById("start");
var scoreDisplay = document.getElementById("score-display");
var cells = document.querySelectorAll(".cell");

var activeCellNumber = 0;

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
    //activeCellNumber = Math.floor(Math.random() * 16);
    activeCellNumber = 3;
    return activeCellNumber;
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
    //var currentlyActive = true;

    cells[target].style.background = 'url("http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg")';

    //cells[target].style.background = "green";
       //cells[target].animationRising();

    setTimeout(function() {
        cells[target].style.background = "red";
        if (score === prevScore) {
            lives--;
            displayScore();
            gameOver();
        }
    }, 1500)
}



// function applyImage() {
//     cells[target].style.backgroundImage = 'url("http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg")';

// }


// function animationRising() {

//     var elem = document.getElementById("animate");
//     var pos = 0;
//     var id = setInterval(frame, 5)

//     function frame() {
//         if (pos == 50) {
//             clearInterval(id);
//         }
//         else {
//             pos++;
//             elem.style.top = pos + 'px';
//         }
//     }

//     cells[target].style.background = "green";
// }


// function animationFalling() {

// }





start.addEventListener("click", function() {
    if (!playing) {
        playing = true;
        displayScore();
        getCells = setInterval(function() {
            activateCell();
        }, 2000);
    }
});



for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (playing) {
            var cell = this;
            //console.log("i = " + i)
            console.log(JSON.stringify(this.style.background));

             if  ((this.style.background) == 
                ("url(\"http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg\")"))

            // if (this.style.background == "green") {
            // if (this.style.backgroundImage.url == 
            //     url("http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg")
            {
                console.log("success");
                score++;
            }

            //  if (i == activeCellNumber) {
            //     score++;
            //   }
            else {
                lives--;
                gameOver();
            }
            displayScore();
        }
    })
}


