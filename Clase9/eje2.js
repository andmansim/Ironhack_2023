let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

//Añadimos un string al final
seriesPending.push('Elemento 1');

//Bucle que nos printea los elementos y su índice, nos dice encontrado si Boolean 99 está en la array
for (let i = 0; i < seriesPending.length; i++){
  console.log(seriesPending[i], `indice ${i}`);
  if (seriesPending[i] === 'Boolean 99'){console.log('Encontrado');}
}

let seriesWatching = [];
//Quitamos el primer elemento de seriesPending y se lo añadimos a la nueva array
let primerElemento = seriesPending.shift();
seriesWatching.unshift(primerElemento);

//Longitud de las arrays
console.log(`Longitud seriesPending ${seriesPending.length} y longitud seriesWatching ${seriesWatching.length}`);

//Añadimos el resto de elementos de seriesPending a seriesWatching
for (let i = 0; i < 4 ; i++){
  let elemento = seriesPending.pop();
  seriesWatching.push(elemento);
}
//Longitud de las arrays
console.log(`Longitud seriesPending ${seriesPending.length} y longitud seriesWatching ${seriesWatching.length}`);

//Quitamos todos los elementos de seriesWatching
seriesWatching.splice(0, seriesWatching.length); //splice(ínidice inicial, índice final, añadir) nos quita los elementos que estén comprendidos entre la posición inicial y la final, estos incluidos. El tercer parámetro es por si queremos añadir un valor nuevo en dichas posiciones.

//Longitud de las arrays
console.log(`Longitud seriesPending ${seriesPending.length} y longitud seriesWatching ${seriesWatching.length}`);