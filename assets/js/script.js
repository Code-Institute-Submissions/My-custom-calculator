// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMcontentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let buttons of buttons){
        button.addEventListener("click", function(){
    if (this.getAttribute("data-type") ==="submit" ){
        checkAnswer();
    } else { 
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
    }
    })
    }

    runGame("Addition");

})
        
/**
 * The main game "loop", called when the script is first loaded 
 * and after the user answer has been processed
 */
function runGame(gameType) {
}
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;

    if(gameType === "Addition") {
    displayAdditionQuestion(num1, num2);
} else{
    alert('Unknown game type: $(gameType');
throw 'Unknown game type: ${gameType}. Aborting!'


}
function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus , minus etc)
 * directly from the dom, and return the correct answer.
 */
function calculatecorrectAnswer() {

let operand1 = parseInt(document.getElementById("operand1").innerText);
let operand2 = parseInt(document.getElementById("operand2").innerText);
let operator = document.getElementById("operator").innerText;

if (operator === "+"){
    return [operand1 + operand2, "Addition"];
} else {
    alert("unimplemented operator $[operator]");
    throw "unimplemented operator $[operator], Aborting!";
}

}

function incrementscore() {

}

function incrementwrongAnswer() {

}


function displayAdditionQuestion(_operand1, _operand2) {

    document.getElementById("operand1"). textContent = operand1;
    document.getElementById("operand2"). textContent = operand2;
    document.getElementById("operator"). textContent = "+";



}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}