const Calculator = require('../src/Calculator');

test('Calculator Add 4 by 2 to equal 6', () => {
    let result = Calculator.Add(4,2);
    expect(result).toBe(6);
});
test('Calculate the difference between 4 and 4', () => {
    let result = Calculator.Subtract(4,2);
    expect(result).toBe(2);
});

test('Calculator Multiply 2 by 4', () => {
    let result = Calculator.Multiply(4,2);
    expect(result).toBe(8);
});

test('Calculator Divide 4 by 2 to equal 2', () => {
    let result = Calculator.Divide(4,2);
    expect(result).toBe(2);
});

test('Calculator squaring a number', () => {
    let result = Calculator.Square(4,null);
    expect(result).toBe(16);
});
test('Calculator finding square root of a number', () => {
    let result = Calculator.SquareRT(4,null);
    expect(result).toBe(2);
});
// test('Calculator adding to calculations', () => {
//     let result = Calculator.Square(4,null);
//     let calculation = Calculator.Calculations
//     calculation.forEach(function(calc) {
//         console.log(calc.GetResults())
//     });

