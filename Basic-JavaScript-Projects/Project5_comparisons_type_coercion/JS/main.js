//We are asking what the type of data is that is associated with 3. We should see number displayed when this is run.
document.write(typeof 3 + "<br><br>");

//We are asking what the type of data is that is associated with "Three". We should see string displayed when this is run.
document.write(typeof "Three" + "<br><br>");

//Here we are testing coercion. This shows that we can put number and string data together.
document.write("2" + 3 + "<br><br>");

//This is testing that the browser will show the word infinity as this number is above the maximum allowed in JS.
document.write(2E400 + "<br><br>");

//This is testing that the browser will show the word -infinity as this number is below the minimum allowed in JS.
document.write(-5E350 + "<br><br>");

document.write("TESTING GREATER THAN AND LESS THAN");
document.write("<br><br>");

//This is testing boolian logic. This should display true as 10 is greater than 5.
document.write(10 > 5);

//Adding breaks so it is easier to see in a browser.
document.write("<br><br>");

//This is testing Boolian logic. This should display false as 10 is not less than 5.
document.write(10 < 5);
document.write("<br><br>");

//Testing out logging to the console. If you press f12 when running this in a browser and click developer tools. You will see the answer to 2+2.
console.log(2+2);

//Testing displaying Boolian logic in the console. You should see false in the console.
console.log(4 < 2);

document.write("TESTING DOUBLE EQUALS");
document.write("<br><br>");

//Testing Boolian logic and using the double equals to see if two numbers are equal to each other. This should display true as 10 is equal to 10.
document.write(10 == 10);
document.write("<br><br>");

//Testing Boolian logic and using the double equals to see if two numbers are equal to each other. This should display false as 10 is not equal to 11.
document.write(10 == 11);
document.write("<br><br>");

document.write("TESTING TRIPLE EQUALS");
document.write("<br><br>");

//Declaring variables for the following triple equals tests.
var a = 1, b = 1, c = "one", d = "two";

//Testing Boolian logic and using the triple equals to see if two sets of data are equal to each other and are the same data type. This should return true as
//variables a & b are both equal to 1 and are both number data types

document.write(a === b);
document.write("<br><br>");

//This should return false as variables a & d are not both equal to 1 and are not the same data type.

document.write(a === d);
document.write("<br><br>");

//This should return false as variables a & c are both equal to 1 but are not the same data type.
document.write(a === c);
document.write("<br><br>");

//This should return false as variables c & d are the same data type but are not both equal to "one".
document.write(c === d);
document.write("<br><br>");

document.write("TESTING AND / OR LOGIC");
document.write("<br><br>");

//This AND statement should return true as both 20 is greater than 10 and 10 is greater than 5.
document.write(20 > 10 && 10 > 5);
document.write("<br><br>");

//This AND statement should return false because while 20 is greater than 10, 10 is not less than 5. Both statements need to be true for an AND gate to work.
document.write(20 > 10 && 10 < 5);
document.write("<br><br>");

//This OR statement should return true as although 20 is not less than 10, 10 is greater than 5. Only one statement needs to be true for an OR gate to work.
document.write(20 < 10 || 10 > 5);
document.write("<br><br>");

//This OR statement should return false as 20 is not less than 10 and 10 is not less than 5.
document.write(20 < 10 || 10 < 5);
document.write("<br><br>");

//Testing out the NOT gate within a function. This should return false to the HTML element with the corresponding id as 20 is greater than 10.
function not_function(){
    document.getElementById("not").innerHTML = !(20>10)
}

//This one should return true as 5 is not greater than 10
function not_function2(){
    document.getElementById("not2").innerHTML = !(5>10)
}