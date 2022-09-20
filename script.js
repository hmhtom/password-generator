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

//Password Generator Plugin (At least one each type selected)
//On Ln 82 replace random with randomAtLeastOne
function randomAtLeastOne(char_set, length){
let password = "";
let char_list = [];
let regex_list = [];

//append choice to both list
if (lowercase_check) {
  char_list.push(LowerCaseLetters);
  regex_list.push(/[a-z]/);
}
if (uppercase_check) {
  char_list.push(UpperCaseLetters);
  regex_list.push(/[A-Z]/);
}
if (numbers_check) {
  char_list.push(Numbers);
  regex_list.push(/[0-9]/);
}
if (special_check) {
  char_list.push(SpecialCharacters);
  regex_list.push(/[^a-zA-Z0-9]/);
}

//loop that takes as much available spaces as possible
let available = length;
while (available !== 0){
  //Regex checking and sync char_list with regex
  for (let y = 0, i = 0; i < char_list.length; i++){
    if(regex_list[y].test(password)){
      regex_list.splice(y, 1);
      char_list.splice(y,1)
    }else{
      y++;
    }
  }
  available = length- password.length - char_list.length

  for(i=0; i<available;i++){
    password += char_set.charAt(Math.floor(Math.random()*char_set.length));
  }
}

//random insert action at the end
while(char_list.length !== 0){
  randomInsert(password, char_list[0].charAt(Math.floor(Math.random()*char_set.length)));
  char_list.shift()
}

return password;
}

function randomInsert(string, character){
let i = Math.floor(Math.random() * string.length)
let left = string.slice(0, i);
let right = string.slice(i+1);

string = left + character + right;
}