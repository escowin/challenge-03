// data.dom
const generatorFormEl = document.getElementById("generator");
const rangeSliderEl = document.getElementById("range-slider");
const numericInputEl = document.getElementById("numeric-input");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numeralEl = document.getElementById("uppercase");
const symbolsEl = document.getElementById("symbols");
const generateButton = document.getElementById("generate");

// data.arrays
const lowercaseArr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const uppercaseArr = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const numeralsArr = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const symbolsArr= [
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'
];

// logic.sync range slider & numeric input values
const syncedValues = function(e) {
  const value = e.target.value;
  rangeSliderEl.value = value;
  numericInputEl.value = value;
};

rangeSliderEl.addEventListener('input', syncedValues);
numericInputEl.addEventListener('input', syncedValues);

// logic.generating the password
const generatePassword = function(passwordLength, includeLowercase, includeUppercase, includeNumerals, includeSymbols) {
  console.log("hello");
};

// event-listener.checks criteria, calls generatePassword()
generatorFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const passwordLength = numericInputEl.value;
  const includeLowercase = lowercaseEl.checked;
  const includeUppercase = uppercaseEl.checked;
  const includeNumerals = numeralEl.checked;
  const includeSymbols = symbolsEl.checked;

  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumerals, includeSymbols);
});


// logic.password-criteria
// var passwordCriteria = function() {
//   // password length prompt followed by if conditional statement to check if length falls outside acceptable range.
//   var length = parseInt(window.prompt("set a password length between 8 - 128 characters long"));
//   if (length < 8 || length > 128) {
//     window.alert("password length outside acceptable range.")
//     return null;
//   }

//   // password character prompts
//   var includeLowerCase = window.confirm("include lowercase?");
//   var includeUpperCase = window.confirm("include uppercase?");
//   var includeNumeric = window.confirm("include numeric?");
//   var includeSymbols = window.confirm("include symbols?");

//   // conditional, value is null if no characters arrays are selected
//   if (
//     includeLowerCase === false && 
//     includeUpperCase === false && 
//     includeNumeric === false && 
//     includeSymbols === false
//   ) {
//     return null;
//   }

//   // user input
//   var selectedCriteria = {
//     length: length,
//     includeLowerCase: lowerCasedCharacters,
//     includeUpperCase: includeUpperCase,
//     includeNumeric: includeNumeric,
//     includeSymbols: includeSymbols
//   };

//   return selectedCriteria;
// }

// logic | random
// var getRandom = function(array) {
//   var randomIndex = Math.floor(Math.random() * array.length);
//   var randomElement = array[randomIndex];

//   return randomElement;
// }

// Logic | password generated dependent on criteria selected.
// var generatePassword = function() {
//   var criteria = passwordCriteria();
  
//   var result = [];
//   var possibleCharacters = [];
//   var guaranteedCharacters = [];

//   // conditional statement - checking if criteria 
//   if (!criteria) return "new password could not be generated, try again";

//   // -  lowercase
//   if (criteria.includeLowerCase) {
//     possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
//     guaranteedCharacters.push(getRandom(lowerCasedCharacters));
//   }

//   // -  uppercase
//   if (criteria.includeUpperCase) {
//     possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
//     guaranteedCharacters.push(getRandom(upperCasedCharacters));
//   }
//   // -  numeric
//   if (criteria.includeNumeric) {
//     possibleCharacters = possibleCharacters.concat(numericCharacters);
//     guaranteedCharacters.push(getRandom(numericCharacters));
//   }

//   if (criteria.includeSymbols) {
//     possibleCharacters = possibleCharacters.concat(symbolCharacters);
//     guaranteedCharacters.push(getRandom(symbolCharacters));
//   }

//   for (var i = 0; i < criteria.length; i++) {
//     var possibleCharacter = getRandom(possibleCharacters);

//     result.push(possibleCharacter);
//   }

//   console.log("https://github.com/escowin/password-generator");
//   return result.join('');
// }

// Write password to the #password input
// var writePassword = function() {
//   // password invokes generatePassword() for its value
//   var password = generatePassword();
//   // passwordText selects <#password> from document
//   var passwordText = document.querySelector("#password");

//   // populates <#password> with password variable value
//   passwordText.value = password;
// }


// logic.current-date
function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.getElementById("date")
  dateEl.textContent = date;
}

currentYear();