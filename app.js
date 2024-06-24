const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 159.78;
    return valueInYen; 
}
    // We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.004950;
    return valueInPound; 
}