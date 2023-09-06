import "../css/style.css";

// data.dom
const formEl = document.getElementById("generator-form");
const displayEl = document.getElementById("password-display");
const rangeSliderEl = document.getElementById("num-slider");
const numInputEl = document.getElementById("num-input");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numeralsEl = document.getElementById("numerals");
const symbolsEl = document.getElementById("symbols");
const dateEl = document.getElementById("date");
const copyBtn = document.getElementById("copy-btn");

const msgs = ["select at least 1 character set", "generate a password"];

// logic.current-date
async function currentYear() {
  const date = new Date().getFullYear();
  dateEl.textContent = date;
}

// logic.sync range slider & numeric input values
function syncedValues(e) {
  const value = e.target.value;
  rangeSliderEl.value = value;
  numInputEl.value = value;
}

// logic.random characters
const randomize = (set) => set[Math.floor(Math.random() * set.length)];

// logic.random
const charSets = {
  lower: () => randomize("abcdefghijklmnopqrstuvwxyz"),
  upper: () => randomize("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  nums: () => randomize("0123456789"),
  symbols: () => randomize("`~!@#$%^&*()_+-={}|[]:;<>?,./"),
};

// logic.generating password
function generatePassword(length, lower, upper, nums, symbols) {
  let password = "";
  const selectedParams = lower + upper + nums + symbols;

  // removes unchecked parameters are removed from array
  const paramsArray = [{ lower }, { upper }, { nums }, { symbols }].filter(
    (selected) => Object.values(selected)[0]
  );

  // loops through the parameters thereby generating a preliminary password string
  for (let i = 0; i < length; i += selectedParams) {
    paramsArray.forEach((parameter) => {
      const parameters = Object.keys(parameter)[0];
      password += charSets[parameters]();
    });
  }

  // shuffles & returns the password string
  return password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}

function displayPassword(e) {
  e.preventDefault();
  const length = +numInputEl.value;
  const $lower = lowercaseEl.checked;
  const $upper = uppercaseEl.checked;
  const $nums = numeralsEl.checked;
  const $symbols = symbolsEl.checked;

  // displays generated password when at least one parameter is selected
  if (!$lower && !$upper && !$nums && !$symbols) {
    displayEl.textContent = msgs[0];
  } else {
    const password = generatePassword(length, $lower, $upper, $nums, $symbols);
    displayEl.textContent = password;
  }
}

// copies password to clipboard
async function copyPassword(e) {
  e.preventDefault();
  let text = displayEl.value;

  if (displayEl.value && !msgs.some((msg) => msg === displayEl.value)) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  } else {
    displayEl.innerText = msgs[1];
  }
}

// calls
currentYear();
rangeSliderEl.addEventListener("input", syncedValues);
numInputEl.addEventListener("input", syncedValues);
formEl.addEventListener("submit", (e) => displayPassword(e));
copyBtn.addEventListener("click", (e) => copyPassword(e));
