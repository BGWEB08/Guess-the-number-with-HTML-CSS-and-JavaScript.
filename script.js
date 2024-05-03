let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");

let answer = Math.floor(Math.random() * 100) + 1;
let guessesCount = 0;
let guessedNum = [];

function play() {
    let userGuess = parseInt(document.getElementById("guess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 || userGuess % 1 !== 0) {
        alert("Please type a whole number between 1 and 100");
    } else {
        guessedNum.push(userGuess);
        guessesCount += 1;
        if (userGuess < answer) {
            msg1.innerHTML = "Your guess is low";
            msg2.innerHTML = "No of guesses: " + guessesCount;
            msg3.innerHTML = "Guessed numbers are: " + guessedNum;
        } else if (userGuess > answer) {
            msg1.innerHTML = "Your guess is high";
            msg2.innerHTML = "No of guesses: " + guessesCount;
            msg3.innerHTML = "Guessed numbers are: " + guessedNum;
        } else if (userGuess === answer) {
            msg1.innerHTML = "You guessed it correctly";
            msg2.innerHTML = "The number was: " + answer;
            msg3.innerHTML = "Guessed at: " + guessesCount + " try";
        }
    }
}
