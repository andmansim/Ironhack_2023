//Mostramos cositas del objeto y modificamos los nombres de algunas de las propuedades
const customer = {
  name:{firstname: 'ivan', lastname:'zoro',},
  age: 32, 
  preferences:[{tech:['camaras', 'relojes'], libros:['cience fictione', 'coding'],},],
};

const {name:{firstname, lastname}, age, preferences:[{ tech: [tech1, tech2], libros: [libros1, libros2] }] }= customer;

console.log(firstname, lastname, age);
console.log(tech1, libros2);

//Creamos una variable nueva solo con las cosas de preferences y cambiamos los nombre
const updatepreferences = { preferences:[{ patata: [tech1, tech2], kk: [libros1, libros2] }] } ;

const updatecustomer = {...customer, ...updatepreferences}; //...para mezclar

console.log(updatecustomer);
