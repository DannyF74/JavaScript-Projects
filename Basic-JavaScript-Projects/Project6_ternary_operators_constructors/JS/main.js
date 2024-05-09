//These functions declare variables for height and if the person can ride or not. We then get the value entered by the HTML code for the height and assign it to
//the height variable. We then check the height against the 52 which we defined as the minimum height. Using the ? will allow for one of the statments to be assigned
//to the can_ride variable. If the statement is true, the left statement will be assigned, if false, then the right statement. We then replace the code within the
//element with the corresponding ID in the HTML with the statement that is assigned to the variable can_ride and the string " to ride.".
function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

//Same function here as above. Just written from memory rather than copied from the LMS.
function age_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age > 18) ? "You are":"You are not";
    document.getElementById("vote").innerHTML = can_vote + " old enough to vote."
}

//Here we are creating a new object (in this case a vehicle) and assigning variables to it. We have given what properties this vehicle has (make, model, year, color).
//The "this" part of the code is a place holder for the owners name. For example our variable Erik is being assigned a vehicle, when this is being created the "this"
//in the function would be replaced with Erik as it is assigned to him. We then marry up the variables that we gave when creating the vehicle to the instance of the class
//(the specific vehicle being made). After this, we make some examples of the instances of vehicles and assign them to our owners. Finally, we replace the HTML code to
//Erik drives a Mustard (the variable "Erik.vehicle_color") etc..
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model +
    " manufactured in " + Erik.vehicle_year;
}

//Same function here as above. Just written from memory rather than copied from the LMS.
function hat(brand, color, cost, style){
    this.hat_brand = brand;
    this.hat_color = color;
    this.hat_cost = cost;
    this.hat_style = style;
}
var Tom = new hat("New Era", "Black", "$20", "Baseball Cap");
var Johnny = new hat("Stetson", "Brown", "$100", "Cowboy");
var Kyle = new hat("Stanley", "White", "$50", "Hard");
function my_hat_function() {
    document.getElementById("hats").innerHTML = "Johnny wears a " +
    Johnny.hat_color + " " + Johnny.hat_brand + " " + Johnny.hat_style +
    " hat which cost him " + Johnny.hat_cost + ".";
}

//Below is another example of another constructor function.
function person(first_name, last_name, age, eye_color, hair_color, weight_kg, height_cm) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.eye_color = eye_color;
    this.hair_color = hair_color;
    this.weight_kg = weight_kg;
    this.height = height_cm;
}

var mom = new person("Jane", "Doe", 65, "Brown", "Blonde", 60, 160);
var dad = new person("Johnny", "Bravo", 60, "Blue", "Brown", 85, 185);

//Here we are going to test out a nested function which is going to add 1 to 9.
function count_function() {
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}