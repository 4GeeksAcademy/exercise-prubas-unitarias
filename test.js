const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("20 dolares deben ser 3130", function() {
    const yen = fromDollarToYen(20);
    const expected = 20 * 156.5;
    expect(yen).toBe(expected);
});

test("20 yens deben ser 43.5 pound", function() {
    const pounds = fromYenToPound(20);
    const expected = 20 * 0.87;
    expect(pounds).toBe(expected);
});
