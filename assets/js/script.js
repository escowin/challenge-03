// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("this works")

  //pw criteria prompt: LENGTH 8 < 128 CHARACTER LIMIT

  //pw criteria prompt: include LOWER, UPPER, NUM, SPECIAL CHARACTER options

  //validate input

  //display generated password using above selected criteria

  //display password
  return "test test"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
