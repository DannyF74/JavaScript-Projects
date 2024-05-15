//This variable keeps track of whos turn it is.
let activeplayer = "X";

//This array stores an array of moves. We use this to determine win conditions.
let selectedsquares = [];

//This function is for placing an x or o in a square.
function placeXorO(squarenumber) {
    //This condition ensures a square hasn't been selected already
    //The .some() methos is used to check each element of the selectsquare array
    //to see if it contains a square that has already been clicked on.
    if(!selectedsquares.some(element => element.includes(squarenumber))){
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squarenumber);
        //This condition checks who's turn it is.
        if (activeplayer === "X") {
            //If activeplayer is equal to  X, then x.png is placed in the HTML
            select.style.backgroundImage = 'url("images/Shaedon.png")';
            //Active player may only be X or O so, if not 'X' then it must be 'O' 
        } else {
            //If activeplayer is equal to  O, then o.png is placed in the HTML
            select.style.backgroundImage = 'url("images/Scoot.png")';
        }
        //squarenumber and activeplayer are concatenated together and added to array.
        selectedsquares.push(squarenumber + activeplayer);
        //This calls a function to check for any win conditions.
        checkwinconditions();
        //this condition is for changing the active player.
        if (activeplayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activeplayer = 'O';
            //If active player is anything other than 'X'
        } else {
            //Change active player to 'X'
            activeplayer = 'X';
        }

        //This function plays a placement sound.
        audio('./media/DFplace.mp3');
        //Condition checks to see if its the computers turn.
        if (activeplayer === 'O') {
            //Disables clicking while it is the computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () {computersTurn(); }, 1000);
        }
        return true;
    }

    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8
        let pickasquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while(!success) {
            pickasquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXorO(pickasquare)) {
                //This line calls the function.
                placeXorO(pickasquare);
                //this changes our boolean and ends the loop
                success = true;
            }
        }
    }
}

//this function parses the selectedsquares array to search for win conditions.
//drawline() function is called to draw a line on the screen if the condition is met.
function checkwinconditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawwinline(50, 100, 558, 100) }

    else if (arrayIncludes('3X', '4X', '5X')) { drawwinline(50, 304, 558, 304) }

    else if (arrayIncludes('6X', '7X', '8X')) { drawwinline(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) { drawwinline(100, 50, 100, 558) }

    else if (arrayIncludes('1X', '4X', '7X')) { drawwinline(304, 50, 304, 558) }

    else if (arrayIncludes('2X', '5X', '8X')) { drawwinline(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) { drawwinline(100, 508, 510, 90) }

    else if (arrayIncludes('0X', '4X', '8X')) { drawwinline(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawwinline(50, 100, 558, 100) }

    else if (arrayIncludes('3O', '4O', '5O')) { drawwinline(50, 304, 558, 304) }

    else if (arrayIncludes('6O', '7O', '8O')) { drawwinline(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) { drawwinline(100, 50, 100, 558) }

    else if (arrayIncludes('1O', '4O', '7O')) { drawwinline(304, 50, 304, 558) }

    else if (arrayIncludes('2O', '5O', '8O')) { drawwinline(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) { drawwinline(100, 508, 510, 90) }

    else if (arrayIncludes('0O', '4O', '8O')) { drawwinline(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedsquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/DFtie.mp3');
        //This function sets a .3 second timer before the resetgame is called.
        setTimeout(function () {resetgame(); }, 300);
    }

    //This function chack if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedsquares.includes(squareA);
        const b = selectedsquares.includes(squareB);
        const c = selectedsquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawline() function.
        if (a === true && b === true && c === true) { return true; }
    }
}
//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes out body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after one second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawwinline(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById("win-lines");
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //This variable stores the temporary x axis data we update in our animations loop.
        x = x1,
        //This variable stores the temporary y axis data we update in our animations loop.
        y = y1;

    //This function interacts with the canvas.
    function animatelinedrawing() {
        //This variable creates a loop.
        const animationloop = requestAnimationFrame(animatelinedrawing);
        //this method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path
        c.beginPath();
        //This method moves us to the starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line,
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //This method draws everything we've laid out above.
        c.stroke();
        //This condition checks if we've reached the end points.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            //This condition adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10; }
            //This condition is similar to the one above.
            //This is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationloop); }
        }
        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win conditions.
        if (x <= x2 && y >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationloop); }
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop.
        const animationloop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop.
        cancelAnimationFrame(animationloop);
    }

    //This line disallows clicking while the win sound is playing.
    disableClick();
    //This line plays win sounds.
    audio('./media/DFwinGame.mp3');
    //This line calls our main animation loop.
    animatelinedrawing();
    //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetgame(); }, 1000);
}

//This function resets the game in the event of a tie or a win.
function resetgame() {
    //This for loop iterates though each HTML square element.
    for(let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = "";
    }
    //This resets our array so it is empty and we can start over.
    selectedsquares = [];
}