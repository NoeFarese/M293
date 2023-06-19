const Pruefungsfragen2 = {
  /*
  Aufgabe 12: (3 Punkte)
  Schreiben Sie eine Funktion die prüft, wie viele Zahlen im übergebenen Array durch die übergebene Zahl teilbar sind.
  Parameter: array, zahl
  Rückgabewert: Anzahl der Zahlen im Array (array), die durch die mitgegebene Zahl (zahl) teilbar sind.
  */
  teilbar_durch_Zahl(array, zahl) {
    "use strict";
    // TODO: Implementieren Sie hier Ihre Lösung für die Aufgabe
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % zahl === 0) {
        count++;
      }
    }
    return count;
  },
  /*
  Aufgabe 13: (3 Punkte)
  Schreiben Sie eine Funktion, die den Mittelwert eines Zahlenarrays zurückgibt.
  Parameter: array
  Rückgabewert: Mittelwert des Arrays
  */
  mittelwert(array) {
    "use strict";
    // TODO: Implementieren Sie hier Ihre Lösung für die Aufgabe
    if (array.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  },
};