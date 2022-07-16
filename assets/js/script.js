// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
var specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '?', '.', ':'
];

var passwordCriteria = function() {
  // password character prompts
  var includeLowerCase = window.confirm("include lowercase?");
  var includeUpperCase = window.confirm("include uppercase?");
  var includeNumeric = window.confirm("include numeric?");
  var includeSpecialCharcters = window.confirm("include special characters?");
}

// Logic
var generatePassword = function() {
  var criteria = passwordCriteria();
  if (!criteria) {
    return "cannot generate password, all criteria declined.";
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
