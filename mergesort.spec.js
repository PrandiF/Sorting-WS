describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([0, 1, 2, 3])).toEqual([
      [0, 1],
      [2, 3],
    ]);
    expect(split([0, 1, 2, 3, 4])).toEqual([
      [0, 1],
      [2, 3, 4],
    ]);
  });
});
describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(merge([1, 3, 5, 7, 11, 25], [2, 6, 10])).toEqual([
      1, 2, 3, 5, 6, 7, 10, 11, 25,
    ]);
  });
});
describe("Mergesort", function () {
  it("devuelve el array ordenado", function () {
    expect(mergeSort([1, 3, 4, 0, 8, 5, 95, 29])).toEqual([
      0, 1, 3, 4, 5, 8, 29, 95,
    ]);
  });
});
