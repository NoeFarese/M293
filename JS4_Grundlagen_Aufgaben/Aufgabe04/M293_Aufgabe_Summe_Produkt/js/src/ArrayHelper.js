// Objekt mit Objektmethoden unter Verwendung der Objekt-Literal-Schreibweise
/* Seit ES2015 können Sie bei Verwendung der Objekt-Literal-Schreibweise 
bei der Definition von Objektmethoden das Schlüsselwort function und den 
vorausgehenden Doppelpunkt auch weglassen. */

const ArrayHelper = {
  summe(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  },
  produkt(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
    return product;
  },
};

let numbers = [1, 2, 3, 4, 5];
let sum = ArrayHelper.summe(numbers);
let product = ArrayHelper.produkt(numbers);
console.log(sum);     // Ausgabe: 15
console.log(product); // Ausgabe: 120