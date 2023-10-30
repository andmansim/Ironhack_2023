//Creamos una lista donde intercambiamos números
const matriz = [1, 2, 3, 4, 5];
let num1 = matriz.shift(); //Quitamos el primero y lo guardamos
let num2 = matriz.pop(); //Quitamos el último y lo guardamos
matriz.unshift(num2); //Ponemos el num2 al princio
matriz.push(num1); //Ponemos el num1 al final
console.log(matriz);

//Calcula la suma y la media de la lista
const prices = [10.99, 44.56, 112.79, 3, 5];
let suma = 0;
for ( let i = 0; i < prices.length; i++){
  suma += prices[i];
}
console.log('Suma: '+ suma);
let media = suma / prices.length;
console.log('Media: ' + media);
