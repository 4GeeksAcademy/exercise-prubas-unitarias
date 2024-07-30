const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("1 euro debe ser 1.07 dólares", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(dollars).toBe(expected);
});
 // Convertir dólares a euros: 20 / 1.07
test("20 dólares deben ser 3130 yenes", function() {
    const yen = fromDollarToYen(20);
    const euros = 20 / oneEuroIs.USD;
    const expected = euros * oneEuroIs.JPY;
    expect(yen).toBe(expected);
});
 // Convertir yenes a euros: 20 / 156.5
test("20 yenes deben ser 0.11131 libras", function() {
    const pounds = fromYenToPound(20);
    const euros = 20 / oneEuroIs.JPY;
    const expected = euros * oneEuroIs.GBP;
    expect(pounds).toBe(expected);
});
