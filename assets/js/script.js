// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
    console.log("generatePassword() runs");
    return "this is the password.";
}

// Write password to the #password input
function writePassword() {
  console.log("writePassword() runs")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
