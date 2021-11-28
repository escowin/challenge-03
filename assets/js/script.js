//Array Charater Sets used for password generation
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numericArray = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharactersArray = ['!','@','#','$','%','^','&','*',"(",")",'_','+'];

// Get references to the #generate element
// Assignment code here
var generateBtn = document.querySelector("#generate");

//pw criteria prompt #1: LENGTH 8 < 128 CHARACTER LIMIT. window prompt
function passwordCriteria () {
  var passwordLength = parseInt(prompt("Enter password length within the range of 8 - 128 characters."))
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be within the 8 - 128 character range.')
    passwordCriteria();
    }     

  //pw criteria prompt #2: include LOWER, UPPER, NUM, SPECIAL CHARACTER options
  var passwordLowerCase = confirm("Include lowercase?");
  var passwordUpperCase = confirm("Include uppercase?");
  var passwordNumeric = confirm("Include numerals?");
  var passwordSpecialCharacters = confirm("Include special characters?");
  console.log(passwordLowerCase)

  if(!passwordLowerCase && !passwordUpperCase && !passwordNumeric && !passwordSpecialCharacters) {
    alert("Password needs at least one character set in order to be generated.")
    return;
  }else {
    //validate input
    var passwordOptions = {
      length: passwordLength,
      lowerCase: passwordLowerCase,
      upperCase: passwordUpperCase,
      numeric: passwordNumeric,
      specialCharacters: passwordSpecialCharacters
    }   
  }
  console.log(passwordOptions)
  return passwordOptions;
  }

  //randomize characters
  function random (arr) {
    var index = Math.floor(Math.random()* arr.length)
    var element = arr[index]
    return element
  }
  console.log(random(specialCharactersArray))

//generate password using above selected criteria
function generatePassword() {
  var choices = passwordCriteria()
  var finalResult = []
  var possibleCharacters = []
  var guaranteeCharacters = []
  if(choices.lowerCase) {
    possibleCharacters= possibleCharacters.concat(lowerCaseArray);
    guaranteeCharacters.push(random(lowerCaseArray));
  }
  if(choices.upperCase) {
    possibleCharacters= possibleCharacters.concat(upperCaseArray)
    guaranteeCharacters.push(random(upperCaseArray));
  }
  if(choices.numeric) {
    possibleCharacters= possibleCharacters.concat(numericArray)
    guaranteeCharacters.push(random(numericArray));
  }
  if(choices.specialCharacters) {
    possibleCharacters= possibleCharacters.concat(specialCharactersArray)
    guaranteeCharacters.push(random(specialCharactersArray))
  }  

  //possibeCharacters combines all confirmed arrays
  for(var i = 0; i < choices.length; i++) {
    var character = random(possibleCharacters)
    finalResult.push(character)
  }
  //guaranteeCharacters selects at least one character from the selected arrays
  for(var i = 0; i < guaranteeCharacters.length; i++) {
    finalResult[i] = guaranteeCharacters[i]
  }
  //joins the guaranteedCharacters in the randomly generated password
  return finalResult.join("")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
