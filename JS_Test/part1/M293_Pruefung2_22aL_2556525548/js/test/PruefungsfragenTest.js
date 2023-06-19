QUnit.test("Die Summe von 2 Zahlen", (assert) => {
  const summand1 = 22;
  const summand2 = 33;
  assert.equal(
    Pruefungsfragen.summe(summand1, summand2),
    55,
    "Die Summe beträgt 55"
  );
});

QUnit.test("Die Summe von 2 Zahlen", (assert) => {
  const summand1 = 17;
  const summand2 = 64;
  assert.equal(
    Pruefungsfragen.summe(summand1, summand2),
    81,
    "Die Summe beträgt 81"
  );
});

QUnit.test("Umrechnung Celsius Temperaturen nach Fahrenheit", (assert) => {
  const celsius = 22;
  assert.equal(
    Pruefungsfragen.celsius_to_fahrenheit(celsius),
    71.6,
    "22° Celsius sind 71.6° Fahrenheit"
  );
});

QUnit.test("Umrechnung Celsius Temperaturen nach Fahrenheit", (assert) => {
  const celsius = 33;
  assert.equal(
    Pruefungsfragen.celsius_to_fahrenheit(celsius),
    91.4,
    "33° Celsius sind 91.4° Fahrenheit"
  );
});

QUnit.test("Objekt-Eigenschaften ausgeben", function (assert) {
  const list = document.querySelector("#qunit-fixture ul");
  const items = Array.prototype.slice.call(list.querySelectorAll("li"));
  assert.equal(items[0].textContent.trim(), "Marke: VW");
  assert.equal(items[1].textContent.trim(), "Baureihe: Passat");
  assert.equal(items[2].textContent.trim(), "Farbe: rot");
  assert.equal(items[3].textContent.trim(), "Aktuelle_Geschwindigkeit: 85");
  assert.equal(items[4].textContent.trim(), "Marke: VW");
  assert.equal(items[5].textContent.trim(), "Baureihe: Passat");
  assert.equal(items[6].textContent.trim(), "Farbe: rot");
  assert.equal(items[7].textContent.trim(), "Aktuelle_Geschwindigkeit: 110");
});
