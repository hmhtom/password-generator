// Assignment Code
let generateBtn = document.querySelector("#generate");  //generate button
let lowercase_check;  //Lowercase checkbox
let uppercase_check;   //Uppercase checkbox
let numbers_check;  //Number checkbox
let special_check;   //Special Char checkbox
//char sets for password
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const SpecialCharacters = String.raw `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`+'`';

//Generate charset for password
function generateCharset(){
  // Initialization 
  let char_set = "";
  lowercase_check = false;
  uppercase_check = false;
  numbers_check = false;
  special_check = false;

  
  //Base on confirmation append the correct set to char_set
  if(confirm("Incude lowercase?")){
    char_set += LowerCaseLetters;
    lowercase_check = true;
  }
  if(confirm("Incude uppercase?")){
    char_set += UpperCaseLetters;
    uppercase_check = true;
  }
  if(confirm("Incude numbers?")){
    char_set += Numbers;
    numbers_check = true;
  }
  if(confirm("Incude special characters?")){
    char_set += SpecialCharacters;
    special_check = true;
  }
  return char_set;
}

//promt for password length to makesure length is valid
function setLength(){
  let length = prompt("Please choose the password length between 8-128.");
  
  while ((length<8||length>128)||/[\D]/.test(length)){
    if (/[\D]/.test(length)){
      alert("Invalid Input.")
    }else if(length<8||length>128){
      alert("Number has to between 8-128.")
    }
    length = prompt("Please choose the password length between 8-128.");
  }
  return Number(length);
}

//Given a set of charset and length for final password and return a randomize password
function random(char_set, length){
  let password = "";

  for(let i = 0; i < length; i++){
    let ranindex = Math.floor(Math.random()*char_set.length);  //Getting a random index pointer for char_set
    password += char_set.charAt(ranindex);  //Apending char of random index to password
  }

  return password;
}

//Generating Password
function generatePassword() {
  //Initializing the password
  let length = setLength();
  let char_set = generateCharset();

  //Keep looping until at least one set if choose
  while (char_set == ""){
    alert("Please choose at least one criteria.")
    char_set = generateCharset();
  }

  return random(char_set, length);
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
