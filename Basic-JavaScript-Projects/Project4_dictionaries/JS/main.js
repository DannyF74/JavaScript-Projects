function my_dictionary() {                                                  //Declaring a function
    var animal1 = {                                                         //Declaring a variable called animal1 and opening a dictionary
        species:"Cat",                                                      //Creating key-value pairs and assigning attributes that are associated with animal1
        color:"White",
        sound:"Meow",
        breed:"Persian",
        age:3,
    }
    delete animal1.sound;                                                   //Deleting one of the KVPs
    document.getElementById("cat.noise").innerHTML = animal1.sound;         //Replacing the content of the HTML element with the ID cat.noise with the value associated with
}                                                                           //the key animal1.sound. Note that we have just deleted this on the line above so we should see
                                                                            //undefined.