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
    }

)}
        

    }
})
function runGame() {

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