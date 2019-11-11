// Guess Number Game
var randNum = Math.floor(Math.random() * 100 + 1);
var playAgain;
var counter = 0;

function GuessnumGame(){
    var userInput = prompt("Guess a number between 1 to 100");
    var i = 0;
    do {
        if (userInput === randNum){
            alert("You are right, You won.");
            play_Again();
            break;
        }
        else alert("Incorrect, Please try again.");
        userInput = prompt("Guess a number between 1-100.");
        counter++;
        i++;
        if (counter === 2)
            play_Again();
    }
    while(i < 2);
}

function play_Again() {
    counter = 0;
    alert("you Lose!");
    playAgain = prompt("Do you want to play again? Yes / No")
        if (playAgain.toLowerCase() === "yes")
        GuessnumGame();

        else if (playAgain.toLowerCase() === "no")
            alert("thank You for playing :)")
}

GuessnumGame();
