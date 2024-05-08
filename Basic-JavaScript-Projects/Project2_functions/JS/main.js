//Testing out the difference and the priority between global and local variables
B2="You have clicked button 2!";


//Function 1 declares a variable and an addition to the variable. This will find the element with the output ID and replace the inner HTML
//of the element in the HTML code with this local variable.
function function_1() {
    var B1="You have clicked button 1!";
    B1+=" Congrats!";
    document.getElementById("output").innerHTML = B1;
}

//Function 2 will do the same as function 1 but it will use a global variable rather than a local one.
function function_2() {
    document.getElementById("output").innerHTML = B2;
}

