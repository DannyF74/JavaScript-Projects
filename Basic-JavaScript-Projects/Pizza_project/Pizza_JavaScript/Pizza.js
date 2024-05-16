function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    
    //Here we are declaring initaial variables
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;

    //Here we are declaring an array which adds all the elements with the size class.
    //The for loop below checks the array and sets the text1 variable to add the
    //selected size.
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    //Below sets the price of each size of pizza
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("Subtotal: $"+runningTotal+".00");
    //These variables will get passed on to each function
    getTopping(runningTotal,text1)
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    //var vegetableArray = document.getElementsByClassName("vegetables");
    
    //Here we are running a for loop that checks if one of the toppings is checked and if so,
    //adds the topping from toppingArray to the selectedTopping array. This also adds another
    //line to the text1 variable with the chosen topping.
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    //Below was my initial attempt at adding vegetables. This worked but I could have just set the class of the vegetables to 'toppings' and not written this extra for loop.
    // for (var k = 0; k < vegetableArray.length; k++) {
    //     if (vegetableArray[k].checked) {
    //         selectedTopping.push(vegetableArray[k].value);
    //         console.log("Selected topping item: ("+vegetableArray[k].value+")");
    //         text1 = text1+vegetableArray[k].value+"<br>";
    //     }
    // }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount -1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("Total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};