//Usar map para manejar arrays sin necesidad de un for
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'lisboa', 'paris']
const letrasCiudades = []
//le decimos que que va a ser del mismo tipo que cities y con map (es para arrays) nos ahorramos el bucle y nos coge directamente cada elemento
let letrasCiudad = cities.map(function letras(ciudad){
  let letra = ciudad[0].toUpperCase(); //De cada elemento cogemos el primero y lo ponemos en mayúsculas
  return letra});
console.log(letrasCiudad);
