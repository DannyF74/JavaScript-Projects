//Here we are creating a function with multiple string variables. The final variable is set to equal the value of part1 and concatinate the values of the
//3 other variables in to one value which is whole_sentence.
function blazers_sentence() {
    var part1 = "The Blazers ";
    var part2 = "are the best ";
    var part3 = "team ";
    var part4 = "in the NBA!";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//Here the sentence.slice will take out all the characters between 4 and 12 in the sentence and apply them to the section variable.
function slice_method() {
    var sentence = "The Portland Trail Blazers";
    var section = sentence.slice(4,12);
    document.getElementById("slice").innerHTML = section;
}

//Here we are taking the variable normal_case and applying the toUpperCase method to it. We have now created a new variable (upper_case) with the same value 
//as normal_case but setting it to all caps.
function upper_case_method() {
    var normal_case = "The Portland Trail Blazers";
    var upper_case = normal_case.toUpperCase();
    document.getElementById("upper").innerHTML = upper_case;
}

//Here the search function takes the target variable and searches through it for the term we have specified (Portland). The result variable will then be set as the
//position of the first match of the search term. This will return 4 because Portland first appears at position 4 in the index of the string.
function search_method() {
    var target = "The Portland Trail Blazers";
    var result = target.search("Portland");
    document.getElementById("search").innerHTML = result;
}

//Here the toString method takes a number data type and converts it to a string data type.
function to_string_method() {
    var x = 123;
    document.getElementById("string_number").innerHTML = x.toString();
}

//Here the toPrecision takes the number and formats the length. The final number is rounded up if there are any numbers beyond the length we have specified.
function to_precision_method() {
    var x = 123456789.123456789;
    document.getElementById("precision").innerHTML = x.toPrecision(15);
}

//Here the toFixed method specifies the number of decimals that you want to display next to a number. If we had 2 in the toFixed brackets,
//our output would be 9.12 as there are only two decimal places requested. As we have 10 our output is 9.1234500000.
function to_fixed_method() {
    var x = 9.12345;
    document.getElementById("fixed").innerHTML = x.toFixed(10);
}

//Here the valueOf just displays the primitive value of the string. A primitive value is data that is not an object and has no methods or properties.
//From what I've researched, it doesn't look like this is normally used.
function value_of_method() {
    var testing_VO = "Testing the valueOf method";
    document.getElementById("value_of").innerHTML = testing_VO.valueOf();
}
