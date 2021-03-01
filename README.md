# projectcalculator

Step 1
  git clone
Step 2
  npm install

<a href='https://coveralls.io/github/KarmDesai1/projectcalculator?branch=master'><img src='https://coveralls.io/repos/github/KarmDesai1/projectcalculator/badge.svg?branch=master' alt='Coverage Status' /></a>


**OOP Design Patterns**
Builder Pattern
$ Basic Design Patterns
1. **Encapsulation** 
The mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this.
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
2. **Abstraction**
Using abstract class/Interface we express the intent of the class rather than the actual implementation. In a way, one class should not know the inner details of another in order to use it, just knowing the interfaces should be good enough.
3. **Inheritance** 
Inheritances expresses “is-a” and/or “has-a” relationship between two objects. Using Inheritance, In derived classes we can reuse the code of existing super classes. In Java, concept of “is-a” is based on class inheritance (using extends) or interface implementation (using implements).
class Calculation {
    constructor(a, b, op) {
        //"this" is the internal reference of the object to access its internal methods and properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    GetResults() {
        return this.op(this.a,this.b)
    }
}
4. **Polymorphism**
It means one name many forms. It is further of two types — static and dynamic. Static polymorphism is achieved using method overloading and dynamic polymorphism using method overriding. It is closely related to inheritance. We can write a code that works on the superclass, and it will work with any subclass type as well.
public void print(Collection<String> collection) {
    for (String s : collection) {
        System.out.println("s = " + s);
    }
}
****SOLID principles that are basic pillars of Object-Oriented Programming****
1.S stands for Single Responsible Priniple
    1 line of code
      computers same code
        no reputs
2.O stands for Open closed principle
3.L stands for Likov Subsitiution Principle
4.I stand for Interfacev Segregation Principle
5.D stands for Dependency Inverstion Principle




