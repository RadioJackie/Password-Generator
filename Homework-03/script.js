// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	console.log(1);
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

	function generatePassword() {
		let generatedPassword = '';
		const passwordOptions = getUserInputs();
		console.log(passwordOptions);
		
			var length = 24,
				charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
				retVal = "";
			for (var i = 0, n = charset.length; i < length; ++i) {
				retVal += charset.charAt(Math.floor(Math.random() * n));
			}
			return retVal;
		
		return generatedPassword
	}
	function getRandomLower() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	}

	function getRandomUpper() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	}

	function getRandomNumber() {
		return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	}

	function getRandomSymbol() {
		const symbols = '!@#$%^&*(){}[]=<>/,.'
		return symbols[Math.floor(Math.random() * symbols.length)];
	}

	function getUserInputs() {
		let userChoices = {
			numberOfChars: 0
		};
		userChoices.numberOfChars = parseInt(prompt('How many characters would you like?'));
		userChoices.Lower = confirm("Would you like lower case charcters?")
		userChoices.Upper = confirm("Would you like Upper case charcters?")
		userChoices.Number = confirm("Would you like Numbers?")
		userChoices.Symbols = confirm("Would you like Symbols?")

		return userChoices;
	}
}

const passwordEl = document.getElementById('password')
const generateEl = document.getElementById('generate')

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
function password(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
}

	function getRandomLower() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	}

	function getRandomUpper() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	}

	function getRandomNumber() {
		return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	}

	function getRandomSymbol() {
		const symbols = '!@#$%^&*(){}[]=<>/,.'
		return symbols[Math.floor(Math.random() * symbols.length)];
	}


/*
Psudo code
1.)Figure out how to make the button work when I click it
2.)Set a criteria for the creation of the password
3.)Choose a length betweem 8 and 128 characters for your password generator
4.)
*/


/*
// Dom elements
const passwordEl = document.getElementById('password')
const generateEl = document.getElementById('generate')
const lengthEl = document.getElementById('length')





const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


);




// Generator Functions

function password(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

	function getRandomLower() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	}

	function getRandomUpper() {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	}

	function getRandomNumber() {
		return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	}

	function getRandomSymbol() {
		const symbols = '!@#$%^&*(){}[]=<>/,.'
		return symbols[Math.floor(Math.random() * symbols.length)];
	}
	*/