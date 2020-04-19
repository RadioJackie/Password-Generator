// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	//console.log(1);
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
			charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>:,";
		retVal = "";
		for (var i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		return retVal;
	}

	function getUserInputs() {
		let userChoices = {
			numberOfChars: 0
		};
		userChoices.numberOfChars = parseInt(prompt('How many characters would you like?'));
		userChoices.Lower = confirm("Would you like lower case charcters?");
		userChoices.Upper = confirm("Would you like Upper case charcters?");
		userChoices.Number = confirm("Would you like Numbers?");
		userChoices.Symbols = confirm("Would you like Symbols?");

		return userChoices;
	}
}

