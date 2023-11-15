//Juego de adivinar el número

//Creamos el número a adivinar de forma aleatoria
const secretNumber = Math.floor(Math.random() * 101);;

//Contador para el número de intentos
let contador = 1;
let intento = 0;

//Función que chequea y ejecuta la lógica del código
function checkGuess(e){
  //Recogemos el valor del imput de la pantalla
  let respuesta = document.getElementById('guess-input').value;

  e.preventDefault();
  console.log('I am working');

  //Ponemos la lógica del código: le avisamos si se pasa, acierta o no llega y el número de intentos que lleva
  if (contador > intento){
    boton.onclick = function(e) {alert(`No te quedan más intentos! El número era ${secretNumber}`);}
  }else{
    if (respuesta == secretNumber) {
      alert(`Lo has acertado! Número de intentos ${contador}`);
    
    } else if (respuesta > secretNumber) {
      alert(`Muy alto! Intento ${contador}`);
      contador++;
    
    } else if (respuesta < secretNumber){ 
      alert(`Muy bajo! Intento ${contador}`);
      contador++;
    }
  
  }
}
//Función que elige la dificultad
function dificultad(){
  let dificultad = prompt('Elige dificultad: 1(Muy fácil), 2(Fácil) o 3(Dificil)');
  if (dificultad == '1'){
    intento = 20;
    alert('Tienes 20 intentos');
  } else if (dificultad == '2'){
    intento = 10;
    alert('Tienes 10 intentos');
  } else if (dificultad == '3'){
    intento = 5;
    alert('Tienes 5 intentos');
  } else {
    alert('Eso no es una dificultad');
  }
  return intento;
}
intento = dificultad();


// Declaramos el botón y cuando se clikea ejecutamos la función checkGuess
let boton = document.getElementById('guess-btn');
boton.onclick = function(e) {checkGuess(e)};




