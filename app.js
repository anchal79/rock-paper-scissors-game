
// Step 1: Declare variables to track scores
let userScore = 0; // Tracks the user's score
let compScore = 0; // Tracks the computer's score

// Step 2: Get references to important elements in the HTML
const userScoreEl = document.getElementById("user-score"); // User's score display
const compScoreEl = document.getElementById("comp-score"); // Computer's score display
const msgEl = document.getElementById("msg"); // Message display (e.g., "You win!")
const choices = document.querySelectorAll(".choice"); // All three game choices (rock, paper, scissors)

// Step 3: Generate the computer's choice randomly
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // The three possible choices
    const randIdx = Math.floor(Math.random() * 3); // Random index (0, 1, or 2)
    return options[randIdx]; // Return the computer's choice
};

// Step 4: Handle what happens when the game is a draw
const drawGame = () => {
    msgEl.textContent = "It's a draw!"; // Display a draw message
};

// Step 5: Handle what happens when someone wins
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increase the user's score
        userScoreEl.textContent = userScore; // Update the score display
        msgEl.textContent = `You win! ${userChoice} beats ${compChoice}`; // Show the winning message
    } else {
        compScore++; // Increase the computer's score
        compScoreEl.textContent = compScore; // Update the score display
        msgEl.textContent = `You lose! ${compChoice} beats ${userChoice}`; // Show the losing message
    }
};

// Step 6: Add event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the user's choice (rock, paper, scissors)
        playGame(userChoice); // Play the game with the user's choice
    });
});

// Step 7: Compare the user's and computer's choices to determine the winner
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Get the computer's choice
    if (userChoice === compChoice) {
        // If both choices are the same, it's a draw
        drawGame();
    } else {
        // Determine if the user wins
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats rock
        } else {
            userWin = compChoice === "paper"; // Scissors beat paper
        }
        // Show the winner message and update scores
        showWinner(userWin, userChoice, compChoice);
    }
};
