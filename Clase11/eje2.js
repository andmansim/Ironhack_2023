let alumno ={
    name: 'Stud', 
    firstProject: 80, 
    secondProject: 75, 
    finalExam:90};
  let alumno2 ={
    name: 'Studio', 
    firstProject: 40, 
    secondProject: 70, 
    finalExam:60};
  //Aunque parezcan diccionarios son objetos, entonces tenemos que pensar como tal
  let clase = [alumno, alumno2];
  let nuevoarray = clase.map(function(personita){
    //Calculamos las cosas y luego las añadimos al objeto
    let totalprojecto = 0.2*personita.firstProject + 0.2*personita.secondProject;
    let totalnota = 0.6*personita.finalExam;
    console.log(totalnota, totalprojecto);
    return {name: personita.name, total: totalprojecto + totalnota}
  });
  console.log(nuevoarray);
  const passed = nuevoarray.filter(function(personita){
    return personita.total > 50
  })
  console.log(passed);