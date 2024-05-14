function car_function() {
    var car_output;
    var car = document.getElementById("car_input").value;
    var car_string = " is an awesome manufacturer!";
    switch(car) {
        case "Ford":
            car_output = "Ford" + car_string;
        break;
        case "VW":
            car_output = "VW" + car_string;
        break;
        case "Tesla":
            car_output = "Tesla" + car_string;
        break;
        case "Chevrolet":
            car_output = "Chevrolet" + car_string;
        break;
        case "Dodge":
            car_output = "Dodge" + car_string;
        break;
        case "Toyota":
            car_output = "Toyota" + car_string;
        break;
        default:
            car_output = "Please enter a manufacturer exactly as written above.";
    }
    document.getElementById("output").innerHTML = car_output;
}

function classname() {
    document.getElementsByClassName("test")[1].innerHTML = "Test Successful!"
}

function drawacircle() {
   let c = document.getElementById("testcanvas");
   let ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.arc(95,50,40,0,2 * Math.PI);
   ctx.stroke();
}

function gradients() {
    const canvas = document.getElementById("gradient");
    const ctx = canvas.getContext("2d");
    const grd = ctx.createLinearGradient(0,0,100,100);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20,20,150,100);
}