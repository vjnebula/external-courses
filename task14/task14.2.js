function Hangman (word){

	this.wordArr = word.split("");
	this.letters = [];
	this.errors = 6;
	this.wrong = [];
	this.errFlag = 0;
	this.lettersString = "";
		
	this.guess = function(charGuess) {
		for (let i = 0; i < this.wordArr.length; i++) {
			if (this.wordArr[i] === charGuess){
				this.letters[i] = charGuess;
				this.errFlag = 1;
				//continue;
			} 
			if (this.letters[i]) {
				if (this.letters[i] === ""){
					this.letters[i] = "_";}
			} else { this.letters[i] = "_";}
		this.lettersString += this.letters[i];
		}
	if (this.errFlag === 0) {
		this.errors--;
		this.wrong.push(charGuess);
	} else { 
		this.errFlag = 0; 
		}
	console.log(this.lettersString, " errors left" + this.errors, " wrong letters " + this.wrong);
	this.lettersString = "";
	if (this.errors === 0) {
		return console.log("game over");
	}
	}//guess
	
	this.getGuessedString = function() {
		for (let i = 0; i < this.wordArr.length; i++) {
			if (this.letters[i]){
				this.lettersString += this.letters[i];
			} else { this.lettersString += "_"; }
		}
	console.log(this.lettersString);
	}//getGuessedString
	
	this.errorsLeft = function () {
		console.log(this.errors);
	}
	
	this.getWrongSymbols = function(){
		console.log(this.wrong);
	}
	this.getStatus = function() {
		for (let i = 0; i < this.wordArr.length; i++) {
			if (this.letters[i]){
				this.lettersString += this.letters[i];
			} else { this.lettersString += "_"; }
		}
		console.log(this.lettersString + " errors left" + this.errors);
	}
	this.startAgain = function (newWord) {
		this.wordArr = newWord.split("");
		this.letters = [];
		this.errors = 6;
		this.wrong = [];
		this.errFlag = 0;
		this.lettersString = "";
	}
}//hangman


let hangman = new Hangman('webpurple');
