test('Adds 14 + 9 to equal 23', () => {
    const { suma } = require('./app.js');
    let total = suma(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 106.58 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(2)).toBe(213.16);
})

test("One yen should be 0.00625 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(6.25);
})