// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'YAY'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.
var isGuessingLetter = true; // set to false to guess solution
// If they are guessing a letter, set the letter that they are
// guessing.

var letter = 'Y'; // UPPERCASE
var guess = 'YAY';
// SCRIPT ////////////////////////////////////////////////////////////

// If guessing a letter...
if(isGuessingLetter){
	if (letter === 'A'){
		console.log("You got a letter!");
		console.log("_A_");
	} else if(letter === "Y") {
		console.log("You got a letter!");
		console.log("Y_Y"); 	
	} else {
	    console.log("Sorry, no " + letter + "!");
	}	
} else {
	if(guess===word){
		console.log("Congratulations! You won Wheel of Fortune!");
	} else {
		console.log("Nope, keep trying!");
	}
}
	// If the word contains the letter...
		// Print back the word with all instances of that letter revealed.
	// If the word does not contain the letter...
		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.
// If guessing the word...
	// If they are correct...
		// Print "Congratulations! You won Wheel Of Fortune!"
	// If they are incorrect...
		// Print back "Nope, keep trying!"
// End of script!
