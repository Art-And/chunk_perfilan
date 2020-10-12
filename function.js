// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//Se puede realizar con cualquier array y con cualquier conjunto de division.

//Se dejan variables para su mejor uso si se requiere escalar el codigo.
const selectArray = [1, 2, 3, 4, 5, 6];
const division = 2;

/* Gracias al ciclo for obtenemos la iteracion de el inicio y final de cada
conjunto de arrays necesarion en el slice*/
const chunk = (originArray, div) => {
  let finishDivArray = [];
  //con length verificamos que la longitud no sea mayor a nuestro array
  for (let i = 0; i < originArray.length; i += div) {
    const remainingArray = originArray.slice(i, i + div);
  /*    Con push agregamos los valores a nuestro array vacio(en este caso
    finishDivArray donde se creara un array de conjunto de arrays */
    finishDivArray.push(remainingArray);
  }
  //imprimimos el resultado al final del scope del for para que agregue completo el resultado
  console.log('Your array division is: ', finishDivArray);
};

//ejecutamos la funcion, con los parametros requeridos.
chunk(selectArray, division);
