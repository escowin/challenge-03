// data.dom
const generatorFormEl = document.getElementById("generator");
const passwordDisplayEl = document.getElementById("password-display");
const rangeSliderEl = document.getElementById("range-slider");
const numericInputEl = document.getElementById("numeric-input");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numeralsEl = document.getElementById("numerals");
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

// logic.generating password
const generatePassword = function(length, selectedLowercase, selectedUppercase, selectedNumerals, selectedSymbols) {
  selectedLowercase = lowercaseArr;
  selectedUppercase = uppercaseEl;
  selectedNumerals = numeralsArr;
  selectedSymbols = symbolsArr;
  
  console.log (selectedLowercase, selectedLowercase, selectedNumerals, selectedSymbols);
  return `generating password that is ${length} characters in length...`;
};

// event-listener.checks criteria, calls generatePassword()
generatorFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const length = numericInputEl.value;
  const selectedLowercase = lowercaseEl.checked;
  const selectedUppercase = uppercaseEl.checked;
  const selectedNumerals = numeralsEl.checked;
  const selectedSymbols = symbolsEl.checked;

  if (!selectedLowercase && !selectedUppercase && !selectedNumerals && !selectedSymbols) {
    passwordDisplayEl.textContent = "your password would be " + length + " characters if you select at least one of the boxes.";
  } else {
    const password = generatePassword(length, selectedLowercase, selectedUppercase, selectedNumerals, selectedSymbols);
    passwordDisplayEl.textContent = password;
  }
});


// logic.current-date
function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.getElementById("date")
  dateEl.textContent = date;
}

currentYear();