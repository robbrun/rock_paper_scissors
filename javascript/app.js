let userScore = 0;
let computerScore = 0;

//variables that have _ in them are DOM variables. 

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_div = document.getElementById("reset-box");

//now we have cached the DOM with the above

//adding the * 3 will randomize the number so it lands between 0 and 3 but max never quite reach 3. 
//Math.floor will round the number down to a whole number.
//store the random number calculation in the randomNumber variable.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
//console.log(getComputerChoice());


function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Your " + userChoice + " beats the " + "Computer's " + computerChoice + ". You win! ";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Your " + userChoice + " loses to the " + "Computer's " + computerChoice + ". You lost... ";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "Your " + userChoice + " matches the " + "Computer's " + computerChoice + ". It's a draw! ";
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


function main () {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    reset_div.addEventListener('click', () => reset());
}
//create main function to encapsulate all the sub functions
main ();

function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "The Game is Reset"
}
