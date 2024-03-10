function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function add(f1, f2) {
    var numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    var denominator = f1.denominator * f2.denominator;
    return new Fraction(numerator, denominator);
}

function subtract(f1, f2) {
    var numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    var denominator = f1.denominator * f2.denominator;
    return new Fraction(numerator, denominator);
}

function multiply(f1, f2) {
    var numerator = f1.numerator * f2.numerator;
    var denominator = f1.denominator * f2.denominator;
    return new Fraction(numerator, denominator);
}

function divide(f1, f2) {
    var numerator = f1.numerator * f2.denominator;
    var denominator = f1.denominator * f2.numerator;
    return new Fraction(numerator, denominator);
}

function reduce(f) {
    var gcd = function (a, b) {
        return b ? gcd(b, a % b) : a;
    };
    var common = gcd(f.numerator, f.denominator);
    return new Fraction(f.numerator / common, f.denominator / common);
}

var fraction1 = new Fraction(3, 4);
var fraction2 = new Fraction(1, 2);

var sum = add(fraction1, fraction2);
var difference = subtract(fraction1, fraction2);
var product = multiply(fraction1, fraction2);
var quotient = divide(fraction1, fraction2);
var reducedFraction = reduce(fraction1);

var outputDiv = document.getElementById('output');
outputDiv.innerHTML += 'Дріб 1: ' + fraction1.numerator + '/' + fraction1.denominator + '<br>';
outputDiv.innerHTML += 'Дріб 2: ' + fraction2.numerator + '/' + fraction2.denominator + '<br><br>';
outputDiv.innerHTML += 'Сума: ' + sum.numerator + '/' + sum.denominator + '<br>';
outputDiv.innerHTML += 'Різниця: ' + difference.numerator + '/' + difference.denominator + '<br>';
outputDiv.innerHTML += 'Добуток: ' + product.numerator + '/' + product.denominator + '<br>';
outputDiv.innerHTML += 'Ділення: ' + quotient.numerator + '/' + quotient.denominator + '<br>';
outputDiv.innerHTML += 'Скорочення об’єкта-дробу: ' + reducedFraction.numerator + '/' + reducedFraction.denominator + '<br>';