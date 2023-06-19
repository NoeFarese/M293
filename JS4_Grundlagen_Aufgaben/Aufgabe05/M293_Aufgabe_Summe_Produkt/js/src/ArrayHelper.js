// Objekt mit Objektmethoden unter Verwendung der Objekt-Literal-Schreibweise
/* Seit ES2015 können Sie bei Verwendung der Objekt-Literal-Schreibweise 
bei der Definition von Objektmethoden das Schlüsselwort function und den 
vorausgehenden Doppelpunkt auch weglassen. */

const ArrayHelper = {
  summe: function(array) {
    if (!Array.isArray(array)) {
      throw new Error('Das Argument muss ein Array sein.');
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number' || array[i] < 0) {
        throw new Error('Das Array darf nur natürliche Zahlen enthalten.');
      }
      sum += array[i];
    }

    return sum;
  },
  produkt: function(array) {
    if (!Array.isArray(array)) {
      throw new Error('Das Argument muss ein Array sein.');
    }

    if (array.length === 0) {
      return 0;
    }

    let result = 1;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number' || array[i] < 0) {
        throw new Error('Das Array darf nur natürliche Zahlen enthalten.');
      }
      result *= array[i];
    }

    return result;
  },
};
