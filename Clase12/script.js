//Juego de adivinar el número

//Creamos el número a adivinar de forma aleatoria
const secretNumber = Math.floor(Math.random() * 101);;

//Contador para el número de intentos
let contador = 1;


//Función que chequea y ejecuta la lógica del código
function checkGuess(e) {
  //Recogemos el valor del imput de la pantalla
  let respuesta = document.getElementById('guess-input').value;

  e.preventDefault();
  console.log('I am working');

  //Ponemos la lógica del código: le avisamos si se pasa, acierta o no llega y el número de intentos que lleva
  if (respuesta == secretNumber) {
    alert(`Lo has acertado! Número de intentos ${contador}`);
    console.log(`Lo has acertado! Número de intentos ${contador}`);
  
  } else if (respuesta > secretNumber) {
    alert(`Muy alto! Intento ${contador}`);
    console.log(`Muy alto! Intento ${contador}`);
    contador++;
  
  } else if (respuesta < secretNumber){ 
    alert(`Muy bajo! Intento ${contador}`);
    console.log(`Muy bajo! Intento ${contador}`);
    contador++;
  }
}

// Declaramos el botón y cuando se clikea ejecutamos la función checkGuess
let boton = document.getElementById('guess-btn');
boton.onclick = function(e) {checkGuess(e)};



