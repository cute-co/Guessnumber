// Generate a random number between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;

//Function to check the user's guess
function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const feedback = document.getElementById('feedback');

    if (userGuess == numberToGuess) {
        feedback.textContent = "Congratulations! You guessed it!";
        feedback.style.color = "green";
    } else if (userGuess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "red";
    } else if (userGuess > numberToGuess) {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Please enter a valid number.";
        feedback.style.color = "orange";
    }
}
