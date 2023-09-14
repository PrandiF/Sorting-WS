function bubbleSort(array) {
  let count = 0;
  if (array.length <= 1) {
    return array;
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          swap(array, i);
          count += 1;
        }
      }
    }
  }
  return array;
}

function swap(arr, indice1) {
  let p1 = arr[indice1];
  arr[indice1] = arr[indice1 + 1];
  arr[indice1 + 1] = p1;
}
