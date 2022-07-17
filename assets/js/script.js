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
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'
];

var passwordCriteria = function() {
  // password length prompt followed by if conditional statement to check if length falls outside acceptable range.
  var length = parseInt(window.prompt("set a password length between 8 - 128 characters long"));
  if (length < 8 || length > 128) {
    window.alert("password length outside acceptable range.")
    return null;
  }

  // password character prompts
  var includeLowerCase = window.confirm("include lowercase?");
  var includeUpperCase = window.confirm("include uppercase?");
  var includeNumeric = window.confirm("include numeric?");
  var includeSpecialCharacters = window.confirm("include symbols?");

  // conditional, value is null if no characters arrays are selected
  if (
    includeLowerCase === false && 
    includeUpperCase === false && 
    includeNumeric === false && 
    includeSpecialCharacters === false
  ) {
    return null;
  }

  // user input
  var selectedCriteria = {
    length: length,
    includeLowerCase: lowerCasedCharacters,
    includeUpperCase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecialCharacters: includeSpecialCharacters
  };
  return selectedCriteria;
}

// Logic | password generated dependent on criteria selected.
var generatePassword = function() {
  var criteria = passwordCriteria();
  
  // conditional statement - checking if criteria 
  if (!criteria) {
    return "cannot generate password without selecting a character set";
  }

  if (criteria.includeLowerCase) {
    return criteria.includeLowerCase.length;
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
