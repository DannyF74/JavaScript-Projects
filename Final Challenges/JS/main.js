window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
})

function checkForm() {
    let a = document.forms["myForm"]["fname"].value;
    let b = document.forms["myForm"]["lname"].value;
    let c = document.forms["myForm"]["email"].value;
    let d = document.forms["myForm"]["phone"].value;
    if (a == "") {
        alert("First name must be filled out.");
        return false;
    } else if (b == "") {
        alert("Last name must be filled out.");
        return false;
    } else if (c == "") {
        alert("Email address must be filled out.");
        return false;
    } else if (d == "") {
        alert("Phone number must be filled out.");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000)