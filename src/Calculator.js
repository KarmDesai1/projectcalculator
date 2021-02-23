const Calculation = require('./models/Calcualtion');
const Sum = require('Operations/Add');
const Difference = require('Operations/Subtract');
const Quotient = require('Operations/Divide');
const Product = require('Operations/Multiply');
const Square = require('Operations/Square');
const SquareRT = require('Operations/SquareRT');

class Calculator {
    static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResult();
    }
    static Product(a,b) {
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a,b) {
        let calculation = new Calculation(a,b,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SquareRT(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation(a,b,SquareRT);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }



}