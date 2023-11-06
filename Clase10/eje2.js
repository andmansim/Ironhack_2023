//Ejercicio de crear arrays de objetos y seleccionar uno de cada array de forma aleatoria
const persona = [];
let persona1 = {
  Nombre: 'Noah',
  Apellido: 'Basile',
}
let persona2 = {
  Nombre: 'Felix',
  Apellido: 'Basile',
}
let persona3 = {
  Nombre: 'Satoru',
  Apellido: 'Gojo',
}
let persona4 = {
  Nombre: 'Seijuro', 
  Apellido: 'Akashi', 
}
let persona5 = {
  Nombre: 'Paimon', 
  Apellido: 'Villosa',
}

persona.push(persona1, persona2, persona3, persona4, persona5);
let arma1 = {
  Nombre: 'Plumas', 
  Peso: '5g', 
}
let arma2 = {
  Nomnbre: 'Anillo',
  Peso: '10g',
}
let arma3 = {
  Nombre: 'Reloj', 
  Peso: '3kg',
}
let arma4 = {
  Nombre: 'Motosierra',
  Peso: '40kg', 
}
let arma5 = {
  Nombre: 'Lanza llamas', 
  Peso: '35kg',
}
let arma6 = {
  Nombre: 'Lanzagranadas',
  Peso: '60kg',
}
let arma7 = {
  Nombre: 'Ladrillo', 
  Peso: '5kg',
}

let armas = [arma1, arma2, arma3, arma4, arma5, arma6, arma7];

let room1 ={
  Nombre: 'Baño',
}
let room2 = {
  Nombre: 'Dormitorio', 
}
let room3 = {
  Nombre: 'Cocina',
}
let room4 = {
  Nombre: 'Terraza',
}
let room5 = {
  Nombre: 'Sótano',
}
let room = [room1, room2, room3, room4, room5];


function seleccionar (array){
  //Coge un elemento random de 0 a la longitud de la array
  //Si está dentro de la array pues nos retorna el objeto de dicha posición
  let j = Math.floor(Math.random() * (array.length + 1));
  if (j < array.length){
    return array[j]; 
  }
 
    
}
//Seleccionamos un objeto de todas las arrays
let cosita = seleccionar(room);
let cosita2 = seleccionar(persona);
let cosita3 = seleccionar(arma);
console.log(cosita, cosita2, cosita3);