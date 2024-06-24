test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should be 159.78 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 159.78;
    expect (fromDollarToYen(3.5)).toBe(559.23);

})
test("One yen should be 0.004950", function() {
    const {fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * 0.0148;
    expect (fromYenToPound(3.5)).toBe(0.0518);
})