function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}; //If n is greater than the length of the slideshow, set slide index to 1 (Go back to first slide)
    if (n < 1) {slideIndex = slides.length}; //If n is less than 1, slide index = the amount of slides in the slideshow (Go to the last slide)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //This loop sets all the dots class names as blank
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest("Pop_up_Button") && !event.target.closest(".contact")){
       closeForm() 
    }
}, false )