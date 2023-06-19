QUnit.test(
  "Gibt die Anzahl der Zahlen im Array, die durch 3 teilbar sind an.",
  (assert) => {
    const arr = [2, 7, 9, 15, 12, 18];
    const zahl = 3;
    assert.equal(
      Pruefungsfragen2.teilbar_durch_Zahl(arr, zahl),
      4,
      "Im Array sind 4 Zahlen durch 3 teilbar"
    );
  }
);

QUnit.test(
  "Gibt die Anzahl der Zahlen im Array, die durch 2 teilbar sind an.",
  (assert) => {
    const arr = [2, 7, 9, 15, 12, 18];
    const zahl = 2;
    assert.equal(
      Pruefungsfragen2.teilbar_durch_Zahl(arr, zahl),
      3,
      "Im Array sind 3 Zahlen durch 2 teilbar"
    );
  }
);

QUnit.test("Mittelwert des Zahlenarrays", (assert) => {
  const numbers = [3, 9, 16, 53, 12, 9, 11];
  assert.equal(
    Pruefungsfragen2.mittelwert(numbers),
    16.142857142857142,
    "Der Mittelwert von [3, 9, 16, 53, 12, 9, 11] ist 16.142857142857142"
  );
});

QUnit.test("Mittelwert des Zahlenarrays", (assert) => {
  const numbers = [4, 8, 47, 27, 56, 4, 5];
  assert.equal(
    Pruefungsfragen2.mittelwert(numbers),
    21.571428571428573,
    "Der Mittelwert von [4, 8, 47, 27, 56, 4, 5] ist 21.571428571428573"
  );
});
