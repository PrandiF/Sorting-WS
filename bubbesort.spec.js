describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function () {
  it("puede ordenar un arreglo invertido", function () {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});

describe("Bubble Sort", function () {
  it("puede ordenar un arreglo", function () {
    expect(bubbleSort([8, 25, 51, 17, 20, 13])).toEqual([
      8, 13, 17, 20, 25, 51,
    ]);
  });
});

describe("probando spyes en función swap", function () {
  it("espia la funcion swap y cuenta cuantas veces fue llamada", function () {
    spyOn(window, "swap").and.callThrough();
    const arr = [3, 1, 2];
    bubbleSort(arr);
    expect(window.swap.calls.count()).toEqual(2);
  });
});
