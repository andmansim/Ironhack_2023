function shuffleArray(arr) {
    //Función que mezcla la array
    for (let i = arr.length - 1; i > 0; i--) { 
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      //intercambiamos posiciones
      arr[i] = arr[j]; 
      arr[j] = temp;
    }
  }
  
  function crearObjetoConParesAleatorios(arr, objeto) {
    shuffleArray(arr); // Baraja el array de forma aleatoria
    let contador = 0;
    for (let i = 0; i < arr.length; i += 2) {
      if (i + 1 < arr.length) {
        contador += 1
        let clave = contador
        let valor1 = arr[i];
        let valor2 = arr[i + 1];
        objeto[clave] = [valor1, valor2];
      } else {
        //  Por si la array es impar
        objeto[arr[i]] = null;
      }
    }
  
    return objeto;
  }
  
  const array = ['Ana', 'Andrea', 'a', 'Tonto1', 'Tonto2', 'Estupido1', 'Mongolo', 'Chimpancé', 'Heterobásico1', 'Heterobásico2', 'Heterobásico3', 'Suisidasión'];
  
  let parejas = {};
  let objetoConParesAleatorios = crearObjetoConParesAleatorios(array, parejas);
  console.log(objetoConParesAleatorios);
  