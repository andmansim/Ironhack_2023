//Generamos una array con 8 objetos, donde el nombre de cada uno es alumno y su posición, y una contraseña aleatoria entre 10 y 50 caracteres. 
const alumnos =[];
function generarContraseñaRandom() {
  const longitudMinima = 10;
  const longitudMaxima = 50;
  const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?";

  const longitud = Math.floor(Math.random() * (longitudMaxima - longitudMinima + 1)) + longitudMinima;
  let contrasenia = "";

  for (let j = 0; j < longitud; j++) {
    const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
    contrasenia += caracterAleatorio;
  }

  return contrasenia;
}

function crearAlumnos(lista){
  for (let i = 1; i<9; i++){
    let contrasenia1 = generarContraseñaRandom();
    lista.push(
    {alumno: `Alumno ${i}`, 
    contrasenia: contrasenia1})
  }
}
crearAlumnos(alumnos);
console.log(alumnos)