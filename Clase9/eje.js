//Creamos una función que nos suma desde el 1 hasta el 100
function sumar(x, y){
    for (let i = x; i < y; i++){
      x = x + (i + 1);
      return x;
    }
    
}
       
console.log(sumar(1, 100));

//Función que nos da el resultado de una combinación de colores (con if)
function colorinchis(color1, color2){
    
    if (color1 === 'aka' && color2 === 'ao'){
      return 'murakashi';
    } else if (color1 == 'aka' && color2 == 'kiiro'){
      return 'orenji';
    } else if (color1 === 'ao' && color2 ==='kiiro'){
      return 'midori';
    }
}

let color = colorinchis('aka', 'ao');
console.log(color);
  
//Función que nos da el resultado de una combinación de colores (con switch y if)
function colorinchis2(color1, color2){
    switch (color1){
      case 'aka':
        if (color2 === 'ao'){return 'murakashi';}
        else if (color2 == 'kiiro'){return 'orenji';}
      case 'ao':
        if (color2 == 'kiiro'){return 'midori';}
        
    }
}
let result = colorinchis2('aka', 'kiiro');
console.log(result);