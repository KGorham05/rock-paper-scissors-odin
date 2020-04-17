// Golbal variables at the top
const possibleChoices = ["r", "p", "s"];
let compChoice;
let userChoice;

function getUserChoice() {
    // prompt the user to input R P or S
    let userChoice = prompt("Choose R P or S");
    userChoice = userChoice.toLowerCase();
};




function validateChoice() {
    // if they type something else
    if (userChoice !== "r" && userChoice !== "p" && userChoice !== "s") {
        // tell them to input R P or S
        alert('You must choose "R", "P", or "S"')
        getUserChoice();
    }
    // once the user has made a choice
    else {
        // randomly generate a choice for the computer
        const randomNum = Math.floor(Math.random() * 3)
        compChoice = possibleChoices[randomNum]
    }
}


console.log('User choice: ' + userChoice)
console.log('Comp choice: ' + compChoice)

// compare the two choices
if (userChoice === compChoice) {
    alert('its a tie!')
} else if ((userChoice === "r" && compChoice === "s") || (userChoice === "p" && compChoice === "r") || (userChoice === "s" && compChoice === "p")) {
    alert('You win!')
} else {
    alert('You lose!')
}
// tell the user if the tied, or lost
getUserChoice();