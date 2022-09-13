// Assignment Code
var generateBtn = document.querySelector("#generate");  //generate button
var okBtn = document.querySelector("#ok");  //ok button
var criteria = document.querySelector("#criteria")    //criteria form
criteria.style.display="none";  //initialize criteria form to be unseened

//char sets for password
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789"
const SpecialCharacters = String.raw ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`+'`';

//show criteria form
function criteriaShow(){
  criteria.style.display="flex";
}
//Password Generator
function generatePassword() {
  //Get the value from the form input
  let length = document.getElementById("length").value;
  let lowercaseletter = document.getElementById("lowercase").checked;
  let uppercaseletter = document.getElementById("uppercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let special = document.getElementById("special").checked;
  //restrict length between 8-128
  if (length>128){length=128;}
  else if(length<8){length=8;}
  //Initializing char_set to choose from and password to be generated
  let char_set = "";
  let password = "";
  //Adding sets of char into char_set base on the checkbox value
  if(lowercaseletter){char_set += LowerCaseLetters;}
  if(uppercaseletter){char_set += UpperCaseLetters;}
  if(numbers){char_set += Numbers;}
  if(special){char_set += SpecialCharacters;}
  //Loop over the length of password
  for(let i = 0; i < length;i++){
    let ranindex = getRandint(0, char_set.length-1);  //Getting a random index pointer for char_set
    password += char_set.charAt(ranindex);  //Apending char of random index to password
  }
  return password;
}
//Get a random integer from min to max
function getRandint(min, max) {
  return Math.floor(Math.random()*(max - min))+min;
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //Hide form once password generated
  criteria.style.display="none";
}


// Add event listener to generate button
generateBtn.addEventListener("click", criteriaShow);
okBtn.addEventListener("click",writePassword);
