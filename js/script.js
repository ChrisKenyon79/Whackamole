


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
    activeCellNumber = Math.floor(Math.random() * 16);
    //activeCellNumber = 3;
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

    //Nic Cage as David Bowie cd cover url
    //cells[target].style.background = 'url("http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg")';

    //Nic Cage creepy
    cells[target].style.background = 'url("https://s-media-cache-ak0.pinimg.com/236x/df/16/0f/df160f6ceb323b7a32c8533012e11a32.jpg")';

    //Donald Trump
    //cells[target].style.background = 'url("data:image/jpeg;base64,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")';


    //green color
    //cells[target].style.background = "green";


    //animation function call - not working
    //cells[target].animationRising();

    setTimeout(function() {
        cells[target].style.background = "red";
        if (score === prevScore) {
            lives--;
            displayScore();
            gameOver();
        }
    }, (1500 - (level * 100)))
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
        }, (2000 - (level * 100)));
    }
});



for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (playing) {
            var cell = this;
            //console.log("i = " + i)
            //console.log(JSON.stringify(this.style.background));

// for Nic Cage as David Bowie
//            if ((this.style.background) == 
//              ("url(\"http://3.bp.blogspot.com/-x_LFV97PsW0/UPlxd__l8lI/AAAAAAAAC4U/dTXly0e4m4M/s1600/JOCHEN+FUCHS+nicolas_cage.jpg\")"))

// for creepy Nic cage
            if ((this.style.background) ==
                ("url(\"https://s-media-cache-ak0.pinimg.com/236x/df/16/0f/df160f6ceb323b7a32c8533012e11a32.jpg\")"))

// for Donald Trump
 //           if ((this.style.background) ==
 //               ("url(\"data:image/jpeg;base64,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\")"))

// for green color 
            // if (this.style.background == "green") {
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


