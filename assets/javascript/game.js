//define the variables
availableLetters="qwertyuiopasdfghjklzm"
computerChoice= ["Selena","Paramore","Bieber","Chainsmokers","Timeflies","Beyonce","Eminem","Nirvana","Metallica","Coldplay","Radiohead","Aerosmith","Ramones","Journey"];
wins= 0;
losses= 0;
guessesLeft= 12;
guessedLetters= [];

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("computer guess:" + computerGuess);

console.log("_ ".repeat(computerGuess.length).trim());
document.getElementById("placeholder").innerHTML = "_".repeat(computerGuess.length).trim();

var currentstatus = "_".repeat(computerGuess.length);


String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

//when someone pushes a key
document.onkeyup= function(event){

	 // var userGuess = String.fromCharCode(event.key).toLowerCase();
	 var userGuess = event.key.toLowerCase();
	 console.log("guess:" + userGuess);

	 //check if guessed before
	 if(guessedLetters.indexOf(userGuess) == -1){
	 	console.log("not guessed");

	    guessesLeft--;
	    document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
	    console.log(guessesLeft);
	   
	   	guessedLetters.push(userGuess);
		document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
	}

	//if the letter guessed is in the computer guesses word then it
	//needs to take a placeholders spot
	//must loop through the computer guess to scan for chosen letter



			for (var i=0; i < computerGuess.length; i++){ 
				console.log("On letter:" + computerGuess[i]);

				//check if userguess letter is in computer word
				if (userGuess == computerGuess[i].toLowerCase()){
				console.log("user guessed correctly:" + userGuess);
				//break;
					currentstatus[i] = userGuess;
					currentstatus = currentstatus.replaceAt(i,computerGuess[i]);
					console.log("i" + i);
					console.log(userGuess);
					document.getElementById("placeholder").innerHTML = currentstatus;
				}
				else{
					console.log("user guessed incorrectly:" + computerGuess[i]);
					//break;
				}
												
			}
		

		//if no guesses are left, then losses goes up and reserts

			if (currentstatus == computerGuess){
				wins++;
				document.getElementById("wins").innerHTML = wins;
				reset();
			}

			else if (guessesLeft > 0){

					guessesLeft--;

				}

			else if (guessesLeft == 0){
				console.log("guesses left");
				losses++;
				document.getElementById("losses").innerHTML = losses;
				reset();
			}
	}


					



// // //to reset
function reset() {
guessesLeft = 12;
guessedLetters = [];
document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
}
