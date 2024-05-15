//Creates an object to keep track of values.
const calculator = {
    //This will display 0 on the calculator screen.
    display_value: 0,
    //This will hold the first operand for any expressions, we will set it to null for now.
    first_operand: null,
    //this checks whether or not the second operand has been inputted by the user.
    wait_second_operand: false,
    //This will hold the operator, we set it to null for now.
    operator: null,
};

//This modifies values each time a button is clicked on.
function input_digit(digit) {
    const { display_value, wait_second_operand } = calculator;
    //This checks if the wait_second_operand is true and sets display value
    //to the key that was clicked on.
    if (wait_second_operand === true) {
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    } else {
        //This overwrites display_value if the current value is 0
        //otherwise it adds on to it.
        calculator.display_value = display_value === 0 ? digit : display_value + digit;
    }
}

//This section handles decimal points.
function input_decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't
    //cause bugs in the operation.
    if (calculator.wait_second_operand === true) return;
    if (!calculator.display_value.includes(dot)) {
        //We are saying that if the display_value does not contain a decimal point
        //we want to add a decimal point.
        calculator.display_value += dot;
    }
}

//This section handles operators
function handle_operator(next_operator) {
    const{first_operand, display_value, operator} = calculator;
    //When an operator key is pressed we convert the current number
    //displayed on the screen to a numver and then store the result in
    //calculator.first_operand if it doesn't already exist
    const value_of_input = parseFloat(display_value);
    //Checks if an operator already exists and if wait_second_operand is true,
    //then updates the operator and exits from the function.
    if (operator && calculator.wait_second_operand) {
        calculator.operator = next_operator;
        return;
    }
    if (first_operand == null) {
        calculator.first_operand = value_of_input;
    } else if (operator) {//Checks to see if an operator already exists
        const value_now = first_operand || 0;
        //If operator exists, property lookup is performed for the operator
        //in the perform_calculation object and the function that matches the
        //operator is executed.
        let result = perform_calculation[operator](value_now, value_of_input);
        //Here we add a fixed amount of numbers after the decimal.
        result= Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = next_operator
}
const perform_calculation = {
    '/' : (first_operand, second_operand) => first_operand / second_operand,
    '*' : (first_operand, second_operand) => first_operand * second_operand,
    '+' : (first_operand, second_operand) => first_operand + second_operand,
    '-' : (first_operand, second_operand) => first_operand - second_operand,
    '=' : (first_operand, second_operand) => second_operand,
};
function calculator_reset() {
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}
//This function updates the calculator screen with the contents of display_value
function update_display() {
    //Makes use of the calculator_screen class to target the
    //input tag in the HTML document
    const display = document.querySelector('.calculator_screen');
    display_value = calculator.display_value;
}

update_display();
//This section monitors button clicks
const keys= document.querySelector('.calculator_keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    //that was clicked.
    const { target } = event;
    //If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')) {
        handle_operator(target.value);
        update_display();
        return;
    }
    if (target.classList.contains ('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    //Ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all_clear')) {
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})