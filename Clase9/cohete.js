//Tenemos una array que va desde china hasta el pacífico, nos indica la ruta que hace el cohete

const paises = ['Omán','Israel', 'Grecia', 'Italia','España','Portugal','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','Caribe','Panamá', 'México','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico'];


let combustible = 10;
let pasos = 100/paises.length;
let distancia = combustible * pasos;
let pasosAvanza= 0;

//Función que nos calcula por donde pasa el cohete y nos dice donde explota
function viaje(){
  for (let i = 0; i < paises.length; i++){
    if (pasosAvanza < distancia){console.log('Pasa por ' + paises[i] + ' sin ningún problema');}
    else {return paises[i];}
    pasosAvanza += pasos; 
  }
}

let a = viaje();
console.log(`Explota en ${a}`)