// Assignment code here
// random variables
const lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const speclChar = ["/", "*", "-", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "?", ";", ":", ".", "<", ">", "[", "]", "{", "}", "|"];
var allChar = [];
var guaranteedChars = [];
// Getting Password length variable
var passLength = 0;
var getPassLength = function () {
  passLength = window.prompt("How many characters would you like your password to be? Between 8 and 128.")
  while (passLength < 8 || passLength > 128) {
    window.alert("Please, enter a number between 8 and 128.")
    passLength = prompt("How many characters would you like your password to be? Between 8 and 128.")
  }
  console.log("Set password length is " + passLength + " Characters")
};
getPassLength();
// Getting character preferences
var lowerCase =
  window.confirm("Would you like your password to include lowercase letters?");

var upperCase =
  window.confirm("Would you like your password to include UPPERCASE LETTERS?");

var numeric =
  window.confirm("Would you like your password to include Numbers?");

var specialChars =
  window.confirm("Would you like your password to include Special Characters?");
// Generated password info object
var generatedPasswordInfo = {
  passwordLength: parseInt(passLength),
  lowerCase: lowerCase,
  upperCase: upperCase,
  numeric: numeric,
  specialChars: specialChars
};
function getRandom(arr) {
  // generate a random number based on the length of the array parameter
  // grab an element based on the randomly generated number ref 65
  // return the randomly generated element
}
console.log(generatedPasswordInfo)
// generate array for password generation
if (generatedPasswordInfo.lowerCase) {
  allChar = allChar.concat(lCase);
// add getRandom()
// add result of getRandom to guaranteedChars
};
if (generatedPasswordInfo.upperCase) {
  allChar = allChar.concat(uCase);
};
if (generatedPasswordInfo.numeric) {
  allChar = allChar.concat(numbers);
};
if (generatedPasswordInfo.specialChars) {
  allChar = allChar.concat(speclChar);
};
// generate password
var generatedPasswordArr = [];
var generatePassword = function () {
  for (var i = 0; i <= generatedPasswordInfo.passwordLength - 1; i++) {
    console.log(i)
    
    // console.log(Math.floor(Math.random() * allChar.length));
    generatedPasswordArr.push(allChar[Math.floor(Math.random() * allChar.length)]);
  };
  // create a for loop to overwrite the first x chars
}
generatePassword();

console.log(generatedPasswordArr)

console.log(allChar)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
