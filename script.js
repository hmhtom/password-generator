// Assignment Code
var generateBtn = document.querySelector("#generate");
var okBtn = document.querySelector("#ok");
var criteria = document.querySelector("#criteria")
criteria.style.display="none";

const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789"
const SpecialCharacters = String.raw ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`+'`';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
