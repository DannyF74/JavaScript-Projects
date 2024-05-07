//testing out escape keys and alert windows.
var A = "Testing apostrophies and quotes \' \" \\";
alert(A);

//created a variable and concatenated 4 string values.
var B = "Testing concatenating variables...\n" + " Testing concatenating 1 \n" + " Testing Concatenating 2 \n" + " Testing Concatenating 3\n";
document.write(B + "<br><br>");

//declared multiple variables on one line.
var team="Portland Trail Blazers", center="Deandre Ayton", pg="Malcolm Brogdon", sf="Matisse Thybulle", pf="Jerami Grant";
document.write(pf + " " + pg + "<br><br>");

//testing expressions with variables
var C = 65;
document.write(C+5);

function my_first_function() {                                          //defining a function and naming it
    var str = "This is the button text"                                 //defining a variable and giving it a string value
    document.getElementById("button_text").innerHTML = str;             //putting the variable in to the HTML element from the point with the "button_text" ID
}

//Not too sure how to space out/break the document.writes just yet. Hopefully that will be covered later. If not, I'll research when it arises again.

function press_any_key() {
    alert("You\'ve pressed a key")
}