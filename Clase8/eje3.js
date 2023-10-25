// Hacemos un bucle que cuente desde 30 hasta 0 restando 1
let counter = 30;
while (counter >= 0) {
    console.log(counter);
    counter -=1;
}

//Usamos un bucle que baja desde 10 hasta 0
//No va y no está terminado
let puntos = false;
for (let i = 10; i >= 0; i --) {
    //Si el número es mayor o igual a 8, lo imprime
    //Si el número es menor a 8 y mayor a 2, imprime ...
    //Si el número es 0, imprime BOOM!
    console.log(i);
    if (i>=8){
        console.log(i);
    } else if (i<8 & i>2 & puntos == false ) {
        console.log("...");
        puntos = true;
    }
    else if (i===0) {
        console.log("BOOM!");
    }
}  

//Creamos un bucle que sume desde 1 hasta 50
for (let i = 1; i <= 50; i++) {
  //Si el número es divisible por 5, lo imprime
  //Si el número es divisible por 10 o por 15, imprime Donkey!
  //Si el número es impar y no es divisible por 10, imprime Monkey!
    
    if (i % 10 == 0 || i % 15 == 0){ 
      console.log('Donkey!')
    } 
    if (i % 2 != 0 && (i-1) % 10 !=0){ 
      console.log('Monkey!')
    }
    if (i % 5 == 0){ 
        continue;
    } 
    console.log(i);
  }