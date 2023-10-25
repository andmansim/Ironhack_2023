//Objetivo: enseñar el tipo de fruta según el nombre ingresado usando switch
let type = "";
const fruit  = prompt ("Enter the fruit name:");
switch (fruit){
  case 'pear':
  case 'apple':
    type = "pome";
    break;
  case 'peach':
  case 'coconut':
    type = "drupe";
    break;
  case 'strawberry':
  case 'blueberry':
  case 'blackberry':
    type = "berry";
    break;
  case 'beans':
  case 'peans':
    type = "legumes";
    break;
  default:
    type = "other";
  break;
}

console.log(`${fruit} is type of: ${type}.`);