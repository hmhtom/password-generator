// Assignment Code
let generateBtn = document.querySelector("#generate");  //generate button
let okBtn = document.querySelector("#ok");  //ok button
let criteria = document.querySelector("#criteria");    //criteria form
let length = document.getElementById("length");  //Password length
let lowercaseletter = document.getElementById("lowercase");  //Lowercase checkbox
let uppercaseletter = document.getElementById("uppercase");  //Uppercase checkbox
let numbers = document.getElementById("numbers");  //Number checkbox
let special = document.getElementById("special");  //Special Char checkbox
//char sets for password
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789"
const SpecialCharacters = String.raw ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`+'`';

//initialize criteria form to be unseened
criteria.style.display="none";

//show criteria form
function criteriaShow() {
  criteria.style.display="flex";
}
//Password Generator
function generatePassword() {
  //Initializing char_set to choose from and password to be generated
  let char_set = "";
  let password = "";

  //restrict length between 8-128
  if (length>128){length=128;}
  else if(length<8){length=8;}

  //Adding sets of char into char_set base on the checkbox value
  if(lowercaseletter.checked){char_set += LowerCaseLetters;}
  if(uppercaseletter.checked){char_set += UpperCaseLetters;}
  if(numbers.checked){char_set += Numbers;}
  if(special.checked){char_set += SpecialCharacters;}

  //Loop over the length of password
  for(let i = 0; i < length.value;i++){
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
  //Check if criteria is valid
  if(password === ""){
    window.alert("Please enter length and select at least one criteria.")
  }else{
    passwordText.value = password;
    //Hide form once password generated
    criteria.style.display="none";
  }
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", criteriaShow);
okBtn.addEventListener("click",writePassword);
