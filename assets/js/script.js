// data.dom
const generatorFormEl = document.getElementById('generator');
const passwordDisplayEl = document.getElementById('password-display');
const rangeSliderEl = document.getElementById('range-slider');
const numericInputEl = document.getElementById('numeric-input');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numeralsEl = document.getElementById('numerals');
const symbolsEl = document.getElementById('symbols');
const generateButton = document.getElementById('generate');

// logic.random characters
const randomLowercase = function() {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  return lowercase[Math.floor(Math.random() * lowercase.length)];
};

const randomUppercase = function() {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppercase[Math.floor(Math.random() * uppercase.length)];
};

const randomNumerals = function() {
  const numerals = '0123456789';
  return numerals[Math.floor(Math.random() * numerals.length)];
};

const randomSymbols = function() {
  const symbols = '`~!@#$%^&*()_+-={}|[]\:;<>?,./';
  return symbols[Math.floor(Math.random() * symbols.length)]
};

// logic.random
const random = {
  lowercase: randomLowercase,
  uppercase: randomUppercase,
  numerals: randomNumerals,
  symbols: randomSymbols
};

// logic.generating password
const generatePassword = function(length, lowercase, uppercase, numerals, symbols) {
  let password = '';
  const selectedParameters = lowercase + uppercase + numerals + symbols;

  // filter.any unchecked parameter is removed from parameterArray
  const parametersArray = [
    { lowercase },
    { uppercase },
    { numerals },
    { symbols }
  ].filter(selected => Object.values(selected)[0]);

  // loop through the parameters thereby generating a preliminary password string
  for(let i = 0; i < length; i += selectedParameters) {
    parametersArray.forEach(parameter => {
      const parameters = Object.keys(parameter)[0];
      password += random[parameters]();
    });
  }

  // randomize.shuffle the string
  var finalPassword = password.split('')
    .sort(function(){return 0.5-Math.random()})
    .join('');

  return finalPassword;
};

// logic.sync range slider & numeric input values
const syncedValues = function(e) {
  const value = e.target.value;
  rangeSliderEl.value = value;
  numericInputEl.value = value;
};

rangeSliderEl.addEventListener('input', syncedValues);
numericInputEl.addEventListener('input', syncedValues);

// event-listener.checks criteria, calls generatePassword()
generatorFormEl.addEventListener('submit', e => {
  e.preventDefault();

  // logic.set length to number type
  const length = +numericInputEl.value;
  const selectedLowercase = lowercaseEl.checked;
  const selectedUppercase = uppercaseEl.checked;
  const selectedNumerals = numeralsEl.checked;
  const selectedSymbols = symbolsEl.checked;

  if (!selectedLowercase && !selectedUppercase && !selectedNumerals && !selectedSymbols) {
    passwordDisplayEl.textContent = `your password would be ${length} characters if you select at least one of the boxes.`;
  } else {
    const password = generatePassword(length, selectedLowercase, selectedUppercase, selectedNumerals, selectedSymbols);
    passwordDisplayEl.textContent = password;
  }
});

// logic.current-date
function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.getElementById('date')
  dateEl.textContent = date;
}

currentYear();