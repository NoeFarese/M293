QUnit.test("Summe eines Zahlenarrays", (assert) => {
  const numbers = [4, 8, 47, 27, 56, 4, 5];
  assert.equal(
    ArrayHelper.summe(numbers),
    151,
    "Die Summe von [4,8,47,27,56,4,5] ist 151"
  );
});

QUnit.test("Summe eines Zahlenarrays", (assert) => {
  const numbers = [3, 9, 16, 53, 12, 9, 11];
  assert.equal(
    ArrayHelper.summe(numbers),
    113,
    "Die Summe von [3,9,16,53,12,9] ist 113"
  );
});

QUnit.test("Produkt eines Zahlenarrays", (assert) => {
  const numbers = [4, 8, 47, 27, 56, 4, 5];
  assert.equal(
    ArrayHelper.produkt(numbers),
    45480960,
    "Die Summe von [4,8,47,27,56,4,5] ist 45'480'960"
  );
});

QUnit.test("Produkt eines Zahlenarrays", (assert) => {
  const numbers = [3, 9, 16, 53, 12, 9, 11];
  assert.equal(
    ArrayHelper.produkt(numbers),
    27200448,
    "Die Summe von [3,9,16,53,12,9] ist 27'200'448"
  );
});
