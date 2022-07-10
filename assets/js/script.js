// Assignment code here

// logic.password generation
// -  click <#generate>
//    - prompts.select criteria:
//      - length (8 - 128 char limit)
//      - character types (lowercase, uppercase, numeric, and/or special char)
//     - validate each selected criteria && 1 of each char type
//     - generate password
// logic.display password
//  - window.alert || dom

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


var generatePassword = "this is the password";

// Write password to the #password input
var writePassword = function() {

  var password = generatePassword;
  console.log(password)
  passwordText.value = password;
  console.log(passwordText.value)
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword(), true);