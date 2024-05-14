function validateform() {
    let w = document.forms["myform"]["fname"].value;
    let x = document.forms["myform"]["lname"].value;
    let y = document.forms["myform"]["email"].value;
    let z = document.forms["myform"]["phone"].value;
    if (w == "" || x == "" || y == "" || z == "") {
        alert("Please fill out the form in full.");
        return false
    }
}