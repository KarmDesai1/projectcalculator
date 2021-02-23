const Sum = require('Operations/Add');
const Diffrence = require('Operations/Subtract');
const Quoitent = require('Operations/Divide');
const Product = require('Operations/Multiply');
const Square = require('Operation/Square');
const SquareRT = require('Operations/SquareRT');

class Calculator {
    static Calculations = []
    static Sum (a,b) {
        let calculation = new calculation (a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Diffrence (a,b) {
        let calculation = new Calculator(a,b,Diffrence);
        Calculator.Calculations.push(calculation);
        return calculation.GetResult
    }


}