//Here we have defined a global variable
var x = 100;

//Here we have produced a working function as all the variables are defined.
function global_plus_local() {
    var y = 50;
    document.getElementById("working").innerHTML = x + y;
}

//Below is a function that doesnt work as one of the variables is not defined. The function is looking for a local variable of a different function.
//to fix this, we would have to define the variable globally.
//function intentionally_broken() {
//    document.getElementById("broken").innerHTML = x + y;
//}


//This function opens with an IF statement. It uses the Date().getHours() method which looks for the current date and hour of the day. We are then checking if the
//hour is less than 12. If this is true, the function will replace the code within the corresponding id with "Good Morning!". If the hour is greater than 12, the
//requirement is not met and the code will not run.
function good_morning() {
    if (new Date().getHours() < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning!";
    }
}


//Below we are testing another IF statement. This time we are checking if the values of one of our global variables are less than the other.
var z = 150

function compare() {
    if (x < z) {
        document.getElementById("compare").innerHTML = "100 is less than 150";
    }
}

//Below is the function given by the LMS explaining IF ELSE statements. We first declare a variable which is equal to the value in the input element with the id
//age in the HTML. The if statement then checks if that value is greater than 18. If it is, the response variable will be set to "You are old enough to vote!".
//If the value is less than 18, the response variable will be set to "You are not old enough to vote!". After this, the code within the element with the id
//"How_old_are_you?" will be replaced with whatever the response variable is set as.
function voting_age() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        response = "You are old enough to vote!";
    }
    else {
        response = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = response;
}

//Here is an example that I created.
function wealth() {
    Wealth = document.getElementById("wealth").value;
    if (Wealth < 1000000) {
        wealth_response = "You don't have $1 Million?! Get a job, peasant!!";
    }
    else {
        wealth_response = "You should and join us on our yacht this weekend!";
    }
    document.getElementById("snooty_response").innerHTML = wealth_response;
}

//Here is the example of the ELSE IF statements given in the LMS portal. This works just like the IF statement listed above but it just adds an extra IF check if the
//first condition is false.
function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon!";
    }
    else {
        reply = "It is the evening!"
    }
    document.getElementById("time_of_day").innerHTML = reply
}