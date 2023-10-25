// Hacemos un bucle que cuente desde 30 hasta 0 restando 1
let counter = 30;
while (counter >= 0) {
    console.log(counter);
    counter -=1;
}

//Usamos un bucle qu baja desde 10 hasta 0 y cuando llega a 0 --> Boom!
for (let i = 10; i >= 0; i --) {
    console.log(i);
    if (i===0){
        console.log('¡Boom!')
    }
}