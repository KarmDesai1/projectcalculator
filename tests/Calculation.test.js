const Calculation = require('../src/Calculator');
const Add = require('../src/Operations/Add');
const Subtract = require('../src/Operations/Subtract');
const Multiply = require('../src/Operations/Multiply');
const Divide = require('../src/Operations/Divide');
const Square = require('../src/Operations/Square')
const SquareRT = require('../src/Operations/SquareRT')

test('Test Calculation Instantiation', () => {
    let calculation = new Calculation(1,2,Add);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Add);
});

test('Test Get results for Sum function', () => {
    let calculation = new Calculation(4,2, Add);
    expect(calculation.GetResults()).toBe(6);
});
test('Test Get results for Difference function', () => {
    let calculation = new Calculation(4,2, Subtract);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Product function', () => {
    let calculation = new Calculation(4,2, Multiply);
    expect(calculation.GetResults()).toBe(8);
});
test('Test Get results for Quotient function', () => {
    let calculation = new Calculation(4,2, Divide);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Square function', () => {
    let calculation = new Calculation(4, null, Square);
    expect(calculation.GetResults()).toBe(16);
});
test('Test Get results for squareRoot function', () => {
    let calculation = new Calculation(4, null, SquareRT);
    expect(calculation.GetResults()).toBe(2);
});