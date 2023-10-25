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
//Condicion en switch del juego
switch (firstPlayerChoice) {
    case 'rock':
        if (secondPlayerChoice === 'scissors') {
            console.log('Gana jugador 1');
        } else if (secondPlayerChoice === 'paper') {
            console.log('Gana jugador 2');
        } else {
            console.log('Empate');
        }
        break;
    case 'scissors':
        if (secondPlayerChoice === 'paper') {
            console.log('Gana jugador 1');
        } else if (secondPlayerChoice === 'rock') {
            console.log('Gana jugador 2');
        } else {
            console.log('Empate');
        }
        break;
    case 'paper':
        if (secondPlayerChoice === 'rock') {
            console.log('Gana jugador 1');
        } else if (secondPlayerChoice === 'scissors') {
            console.log('Gana jugador 2');
        } else {
            console.log('Empate');
        }
        break;
    default:
        console.log('Empate');
        break;
}//Fin del

