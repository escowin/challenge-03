// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays

// Logic
var generatePassword = function() {
    // password character prompts
    var includeLowerCase = window.confirm("include lowercase?");
    var includeUpperCase = window.confirm("include uppercase?");
    var includeNumeric = window.confirm("include numeric?");
    var includeSpecialCharcters = window.confirm("include special characters?");
    if (includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharcters) {
      return "this is the password.";
    } else {
      return "nothing";
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
