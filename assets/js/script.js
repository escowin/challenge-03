// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("this works")

  //pw criteria prompt: LENGTH 8 < 128 CHARACTER LIMIT. window prompt
  var passwordLength = prompt("Enter password length within the range of 8 - 128 characters.");
  if (passwordLength < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }
  if (passwordLength > 128) {
    alert('Password must be less than 128 characters.');
    return;
  } 
  }
  //pw criteria prompt: include LOWER, UPPER, NUM, SPECIAL CHARACTER options
  //validate input

  //generate password using above selected criteria

  //display password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
