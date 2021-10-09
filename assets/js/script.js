// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMcontentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button for buttons){
        button.addEventListener("click", function(){
    if (this.getAttribute("data-type") ==="submit" ){
        alert("You clicked submit!");
    } else { 
        let gameType = this.getAttribute("data-type");
        alert("You clicked ${gameType}")
    }
    })
    }
})
        
/**
 * The main game "loop", called when the script is first loaded
 * and after the user answer has been processed
 */
function runGame() {

    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;
    }

function checkAnswer() {

}


function calculatecorrectAnswer() {

}

function incrementscore() {

}

function incrementwrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}