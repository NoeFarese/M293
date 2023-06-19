const Pruefungsfragen = {
  /*
  Aufgabe 6: (1 Punkt)
  Erstellen Sie eine Funktion (summe), welche zwei Zahlen addiert.
  Geben Sie die Summe als Rückgabewert aus der Funktion zurück.
  */
  summe(a, b) {
    return a+b;
  },
  /*
  Aufgabe 7: (2 Punkte)
  Recherchiere im Internet nach der Umrechnungsformel, die Celsius Temperaturen nach Fahrenheit umrechnet.
  Siehe auch: https://de.wikipedia.org/wiki/Grad_Celsius#Umrechnung
  Erstellen Sie eine Funktion (celsius_to_fahrenheit), welche eine Celsius Temperatur in Fahrenheit umrechnet.
  Geben Sie den finalen Fahrenheit-Wert als Rückgabewert aus der Funktion zurück.
  Benutzen Sie dazu die Objektmethode unten.
  */
  celsius_to_fahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  },
};
