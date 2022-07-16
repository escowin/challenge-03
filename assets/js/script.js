// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays

// Logic
var generatePassword = function() {
    return "this is the password.";
}

// Write password to the #password input
function writePassword() {
  // password character prompts
  var includeLowerCase = window.confirm("include lowercase?");
  var includeUpperCase = window.confirm("include uppercase?");
  var includeNumeric = window.confirm("include numeric?");
  var includeSpecialCharcters = window.confirm("include special characters?");
  console.log(
    includeLowerCase, 
    includeUpperCase, 
    includeNumeric, 
    includeSpecialCharcters
  );

  // password value
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
