const Calculator = require('../src/Calculator');

test('Calculator Divide 4 by 2 to equal 2', () => {
    let calc = new Calculation();
    let result = calc.Divide(4,2);
    expect(result).toBe(2);
    expect(calc.Result).toBe(2);
});
test('Calculator Add 7 by 7 to equal 14', () => {
    let calc = new Calculator();
    expect(calc.Add(7,7)).toBe(14);
    expect(calc.Result.toBe(14));
});
test('Calculator Multiply 2 by 4', () => {
    let calc = new Calculator();
    expect(calc.Multiply(2,4)).toBe(8);
    expect(calc.Result).toBe(8);
});
test('Calculator  add array of 5,6,7,8 and get Result 26', () => {
    let calc = new Calculator();
    let myArray = [5,6,7,8];
    expect(calc.Add(myArray)).toBe(26);
    expect(calc.Result).toBe(26);
})


