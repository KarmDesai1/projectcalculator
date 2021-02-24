const Calculation = require('./Operations/models/Calculations');
const Add = require('Operations/Add');
const Subtract = require('Operations/Subtract');
const Multiply = require('Operations/Multiply');
const Divide = require('Operations/Divide');
const Square = require('Operations/Square');
const SquareRT = require('Operations/SquareRT');

class Calculator {
    static Calculations = []
    static Add(a,b) {
        let calculation = new Calculation(a,b,Add);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Subtract(a,b) {
        let calculation = new Calculation(a,b,Subtract);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Multiply(a,b) {
        let calculation = new Calculation(a,b,Multiply);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Divide(a,b) {
        let calculation = new Calculation(a,b,Divide);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a,b) {
        let calculation = new Calculation(a,b,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SquareRT(a,b) {
        let calculation = new Calculation(a,b,SquareRT);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;