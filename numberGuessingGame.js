const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let userGuess = null;
const gameStart = document.querySelector(".gameStart");


gameStart.addEventListener("click", function(){

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Guess a number between 1 and 100"));
    console.log(userGuess);

    if (userGuess < randomNumber) {
        alert("Too low! Try again.")
    }

    if (userGuess > randomNumber) {
        alert("Too high! Try again.")
    }
        
}

alert("Congratulations! You guessed the correct number.");
});
