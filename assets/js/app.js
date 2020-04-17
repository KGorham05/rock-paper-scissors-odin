// Golbal variables at the top
const possibleChoices = ["r", "p", "s"];
let compChoice;
let userChoice;
let wins = 0;
let losses = 0;
let ties = 0;

function getUserChoice() {
    // prompt the user to input R P or S
    userChoice = prompt("Choose R P or S");
    userChoice = userChoice.toLowerCase();
    validateChoice();
};

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    compChoice = possibleChoices[randomNum];
};

function validateChoice() {
    // if they type something else
    if (userChoice !== "r" && userChoice !== "p" && userChoice !== "s") {
        // tell them to input R P or S
        alert('You must choose "R", "P", or "S"');
        getUserChoice();
    }
    // once the user has made a choice
    else {
        // randomly generate a choice for the computer
        generateComputerChoice();
        compareAnswers();
    };
};

function compareAnswers() {
    // compare the two choices
    if (userChoice === compChoice) {
        alert('its a tie!')
        ties++;
    } else if ((userChoice === "r" && compChoice === "s") || (userChoice === "p" && compChoice === "r") || (userChoice === "s" && compChoice === "p")) {
        alert('You win!')
        wins++;
    } else {
        alert('You lose!')
        losses++;
    };
    updateScoreboard();
};

function updateScoreboard() {
    $("#wins-display").text(wins);
    $("#losses-display").text(losses);
    $("#ties-display").text(ties);
};

$("#start-game").click(getUserChoice);
