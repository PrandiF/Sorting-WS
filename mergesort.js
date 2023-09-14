function split(wholeArray) {
  let firstHalf = null;
  let secondHalf = null;
  if (wholeArray.length % 2 === 0) {
    let mitad = wholeArray.length / 2;
    firstHalf = wholeArray.slice(0, mitad);
    secondHalf = wholeArray.slice(mitad);
    return [firstHalf, secondHalf];
  } else {
    let mitad = wholeArray.length / 2 - 0.5;
    firstHalf = wholeArray.slice(0, mitad);
    secondHalf = wholeArray.slice(mitad);
    if (firstHalf[0] === undefined) return [secondHalf];
    return [firstHalf, secondHalf];
  }
}

function merge(arr1, arr2) {
  let arrMergeado = [];
  let a1 = arr1.shift();
  let a2 = arr2.shift();
  while (a1 !== undefined || a2 !== undefined) {
    if ((a1 === undefined || a1 > a2) && a2 !== undefined) {
      arrMergeado.push(a2);
      a2 = arr2.shift();
    }
    if ((a2 === undefined || a2 > a1) && a1 !== undefined) {
      arrMergeado.push(a1);
      a1 = arr1.shift();
    }
  }

  return arrMergeado;
}

function mergeSort(array) {
  let arrNuevo = [];
  let arrAux = [];
  let arrAux2 = null;
  arrNuevo = split(array);
  while (arrNuevo.length < array.length) {
    arrAux = split(arrNuevo.shift());
    if (arrAux[0] !== undefined) arrNuevo.push(arrAux[0]);
    if (arrAux[1] !== undefined) arrNuevo.push(arrAux[1]);
  }

  while (arrNuevo.length > 1) {
    arrAux = arrNuevo.shift();
    arrAux2 = arrNuevo.shift();
    arrNuevo.push(merge(arrAux, arrAux2));
  }

  return arrNuevo[0];
}

//Gran mano de juan arismendi diaz
