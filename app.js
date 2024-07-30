const sum = (a, b) => {
    return a + b;
}
console.log(sum(7, 3));

// Un euro es:
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar
    "GBP": 0.87, // libra británica
};

  // Convertir dólares a euros, luego euros a yenes
function fromDollarToYen(USD) {
    let euros = USD / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}
function fromEuroToDollar(EUR) {
    return EUR * oneEuroIs.USD;
}
// Convertir yenes a euros, luego euros a libras
function fromYenToPound(JPY) {
    let euros = JPY / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };
