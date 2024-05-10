//This WHILE loop takes the variable current_hunger_level and while that has a value less than full_stomach, it will add 1 to the value. Once this is
//no longer less than full stomach, the html code within the element with the id loop will be replaced with "Current hunger level is " + current_hunger_level + "<br>"
function call_loop() {
    var current_hunger_level = 0
    var full_stomach = 10;
    while (current_hunger_level < full_stomach) {
        current_hunger_level += 1;
    }  
    document.getElementById("loop").innerHTML = "Current hunger level is " + current_hunger_level + "<br>";
}

//Here we are declaring a string variable for which we would like to know the length. the .length will return the how many characters are in the requested variable.
function string_length() {
    A = "Testing string length method";
    document.getElementById("length").innerHTML = A.length;
}

//Here we are creating an array of instruments and we are then saying that y is the index of the element. Every time we run through this loop and the index is less
//than the total length of the array, we will add 1 to y. We will then set the content variable to the instrument that is in the index y.
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

//Here we have a function that declares a variable and assigns different attributes to an array that is associated with that variable. We then call a string and
//one of the items in the array to replace the HTML in the element with the corresponding id.
function shaedon_sharpe() {
    var shaedon_sharpe = [];
    shaedon_sharpe[0] = "dribbling";
    shaedon_sharpe[1] = "shooting";
    shaedon_sharpe[2] = "passing";
    shaedon_sharpe[3] = "defending"
    document.getElementById("shaedon").innerHTML = "Shaedon Sharpe is " + shaedon_sharpe[1];
}

//Here we are testing the const keyword. This means that the car will always remain the same. The properties and values can change but the object cannot be reassigned.
function constant_function() {
    const car = {type:"sports", make:"Ferrari", model:"California", color:"red"};
    car.color = "yellow";
    car.price = "$100,000";
    document.getElementById("constant").innerHTML = "The cost of the " + car.color + " " + car.make + " was " + car.price;
}

//Here we are showing the difference between var and let. This shows that we have set x by using var and then we print it to the html with id var1.
//We then change x by using let in a different block of code.The browser will then change the html at the element with id let1 to what we assigned to x with let.
//However, once we are outside of that block of code, because we have defined let in a block, this let only has a block scope. This means
//the variable is does not change outside the block and the final statement will still display the original var value.
function var_let() {
    var x = "This is a variable keyword assigned to x"
    document.getElementById("var1").innerHTML = x;
    {
        let x = "This is a let keyword assigned to x"
        document.getElementById("let1").innerHTML = "<br>" + x;
    }
    document.getElementById("var2").innerHTML = "<br>" + x;
}

//Here we have a return function. This is a very basic example but return is what is sent back to whatever called the function. This could be useful for complex math
//problems. You can work out the answer in the function and return the answer to whatever called the function
function return_function(){
    document.getElementById("return").innerHTML = you_clicked_the_button();
    function you_clicked_the_button() {
        return "You clicked the button!";
    }
}

//Here we are showing how methods work on objects. Methods are functions that are performed on objects. In this case, we have a method that puts together our output
//using multiple properties of our object.
function shoes() {
    let shoe = {
        brand:"Nike",
        model:"Air Force 1's",
        color:"white",
        year:"2023",
        size:"10.5",
        description : function() {
            return "These shoes are " + shoe.color + " " + shoe.brand + " " + shoe.model + ". They are size " + shoe.size + " and they were made in " + shoe.year + "."
        }
    }
    document.getElementById("shoes").innerHTML = shoe.description()
}