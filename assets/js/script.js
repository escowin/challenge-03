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
var symbolCharacters = [
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
  var includeSymbols = window.confirm("include symbols?");

  // conditional, value is null if no characters arrays are selected
  if (
    includeLowerCase === false && 
    includeUpperCase === false && 
    includeNumeric === false && 
    includeSymbols === false
  ) {
    return null;
  }

  // user input
  var selectedCriteria = {
    length: length,
    includeLowerCase: lowerCasedCharacters,
    includeUpperCase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSymbols: includeSymbols
  };

  return selectedCriteria;
}

// logic | random
var getRandom = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// Logic | password generated dependent on criteria selected.
var generatePassword = function() {
  var criteria = passwordCriteria();
  
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // conditional statement - checking if criteria 
  if (!criteria) return "new password could not be generated, try again";

  // -  lowercase
  if (criteria.includeLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // -  uppercase
  if (criteria.includeUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  // -  numeric
  if (criteria.includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (criteria.includeSymbols) {
    possibleCharacters = possibleCharacters.concat(symbolCharacters);
    guaranteedCharacters.push(getRandom(symbolCharacters));
  }

  for (var i = 0; i < criteria.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  return result.join('');
}

// Write password to the #password input
var writePassword = function() {
  // password invokes generatePassword() for its value
  var password = generatePassword();
  // passwordText selects <#password> from document
  var passwordText = document.querySelector("#password");

  // populates <#password> with password variable value
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
