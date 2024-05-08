//My initial attempt at getting addition function to work with the button

function addition(a,b){
    return a + b;
}

x = addition(2,2);

function returnmath(){
    document.getElementById("math").innerHTML = "2 + 2 = " + x;
}

//Now following the code in the LMS portal

//Below we have some simple math functons. First we declared a variable and made that equal to the math problem we are trying to solve. Then below that, we are changing
//what is written inside the HTML element with the corresponding ID to the answer.

function subtraction_function() {
    var subtraction = 5-2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_function() {
    var multiplication = 6*8;
    document.getElementById("multiplication").innerHTML = "6 x 8 = " + multiplication;
}

function division_function() {
    var division = 48/6;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

//The function below shows we can do multiple math problems at once.

function more_math() {
    var simple_math = (1 + 2) * 10 /2 -5;
    document.getElementById("simple_math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

//The percent sign in this equation will give us the remainder of a division problem.

function modulus_operator() {
    var modulus_operator = 25 % 6;
    document.getElementById("modulus_operator").innerHTML = "When you divide 25 by 6 you are left with a remainder of " + modulus_operator;
}

//The minus sign will take the variable and will make it a negative number. For example, the 10 below will be -10 with the negation operator.

function negation_operator() {
    var negation_operator = 10;
    document.getElementById("negation_operator").innerHTML = -negation_operator;
}

//the ++ next to the variable will add 1 to the variable

function increment() {
    var increment = 5;
    increment++;
    document.getElementById("increment").innerHTML = increment;
}

//the -- next to the variable will subtract 1 from the variable

function decrement() {
    var decrement = 5
    decrement--
    document.getElementById("decrement").innerHTML = decrement
}

//This math method will produce a random number between 0 - 100.

function random_number() {
    window.alert(Math.random() * 100);
}

//This math method will round a number up to its nearest whole number. If we wanted to round down, we would use Math.floor(). We assinged this to a variable and changed the
//HTML element with the corresponding ID.

function round_up() {
    var round_up = Math.ceil(4.2)
    document.getElementById("round_up").innerHTML = round_up
}