//Juego piedra papel o tijera
//Varaibles
let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let firstPlayerChoice = prompt('First player choice');
let secondPlayerChoice = prompt('Second player choice');

//Posibles casos
let firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
let thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;

let fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
let fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
let sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;

// Condicional if del juego
if (firstPossibility || secondPossibility || thirdPossibility) {
    console.log('Gana jugador 1');
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
    console.log('Gana jugador 2');
} else {
    console.log('Empate');
}