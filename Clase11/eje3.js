//filtramos personas que tienen edad para beber
const persona = [
    {nombre: 'Candance', age: 25},
    {nombre: 'Tignari', age: 30},
    {nombre: 'Cyno', age: 10},
    {nombre: 'Faruzan', age: 21},
    {nombre: 'Xianglin', age: 17},
    {nombre: 'Jean', age: 15},      
];

let personabebida = persona.filter(function(personita){
return personita.age > 20;
});
console.log(personabebida);