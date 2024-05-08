//setting the content of the element with the corresponding ID to 0/0 will result in Not a Number as you can't divide 0 by itself
function NAN() {
    document.getElementById("NAN").innerHTML = 0/0;
}

//This function will change the corresponding element to true as "Testing" is not a number
function isNANtrue() {
    document.getElementById("isNANtrue").innerHTML = isNaN ("Testing");
}

//This function will change the corresponding element to false as 1 is a number
function isNANfalse() {
    document.getElementById("isNANfalse").innerHTML = isNaN (1);
}