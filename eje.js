//Cogemos los datos del objeto y los monstramos
const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

//lo asociamos para poder llamarlo sin poner data.name.firstname
const {name: { firstName, lastName },hometown: { city, country },favoriteFootballTeam,} = data;
console.log(`Su nombre es ${firstname}, viven en ${city} y su fut es ${favoriteFootballTeam}`);
