// Assignment Code
var generateBtn = document.querySelector("#generate");
//var myInteger = 8;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// KNOWN ISSUES:
// - IF GENERATE A SECOND PASSWORD WITHOUT REFRESHING, DOUBLES -- i need to clear it afterwards a;sdkfj;skldjf
// - DOES NOT GIVE ALERT IF NUMBER TOO HIGH, ONLY TOO LOW

var charLowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// do they need to be strings or can they just be ints?
var charSymb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var selectedChoice = [];

// Functions to randomize which character is chosen from a each character set array
// function randomLowCase() {
//   return charLowCase = charLowCase[Math.floor(Math.random() * charLowCase.length)];}

// function randomUpperCase() {
//  return charUpperCase = charUpperCase[Math.floor(Math.random() * charUpperCase.length)];}

// function randomNum() {
//  return charNum = charNum[Math.floor(Math.random() * charNum.length)];}

// function randomSymb() {
//  return charSymb = charSymb[Math.floor(Math.random() * charSymb.length)];}

 function randomChoice() {
  return selectedChoice = selectedChoice[Math.floor(Math.random() * selectedChoice.length)];}

// needs to become randomChoice = [randomLowCase, randomeUpperCase, randomNum, randomSymb]; dependent on which
// option chosen

// CURRENTLY:
// - PER CONFIRM THAT RETURNS TRUE, ADDS THAT TRUE TO VARIABLE SELECTED CHOICE
// - SELECTED CHOICE DOES NOT CONTAIN THE RANDOMIZED FUNCTIONS FOR EACH CHAR SET
// --> ASK ABOUT HOW TO LINK THE TRUE VALUES FROM CONFIRMS TO RANDOM CHAR GEN TO ARRAY FOR EACH RANDOM GEN

function generatePassword()
{
  var yesGen = window.confirm("Would you like to generate a password?");
  if (yesGen) {
    var passLength = window.prompt("How many characters would you like to include (must be between 8 and 128)?");
    passLength = parseInt("1000", 10);
    
    if (passLength >= 8 && passLength <= 128) {
      console.log(passLength);
      console.log(typeof passLength);
      var lowCase = window.confirm("Would you like to include lower case letters?");
      if (lowCase) {
        selectedChoice = selectedChoice.concat(charLowCase);
      }

      var upperCase = window.confirm("Would you like to include upper case letters?");
      if (upperCase) {
        selectedChoice = selectedChoice.concat(charUpperCase);
      }

      var useNum = window.confirm("Would you like to include numbers?");
      if (useNum) {
        selectedChoice = selectedChoice.concat(charNum);
      }

      var useSymb = window.confirm("Would you like to include special characters?");
      if (useSymb) {
        selectedChoice = selectedChoice.concat(charSymb);
      }

      console.log(selectedChoice);

      // // do i need to create a variable to contain which options selected? can use conditional w/in
      // // each confirm to (add? return true?) push to add each to array randomChoice if return true?

      if (lowCase == false && upperCase == false && useNum == false && useSymb == false) {
        alert("Password must contain at least one character choice.");
      // } else {
      //   // do i need an else if for every possible set of chars chosen?
      // w/e the hell is going on here it is NOT working c:
      } else if (selectedChoice == charLowCase, charUpperCase, charNum, charSymb) {
          for (i=0; i < passLength.length; i++) {
           password = password + randomChoice();
          } console.log(password);
        }
      }
    } else {
      alert("Password must be between 8 and 128 characters.");
    }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// would it look like:
// var randonLowCase = function(charLowCase[Math.floor(Math.random() * charLowCase.length)]);

// function randomLowCase() {
  // return charLowCase[Math.floor(Math.random() * charLowCase.length)];}

// randomLowCase = charLowCase[Math.floor(Math.random() * charLowCase.length)];

// ---------------------------------------------------------------------

  // may need to change name before =, meant to randomize which char set to choose

// duch512 @ https://gist.github.com/bendc/1e6af8f2d8027f2965da

  // all your code should go in here
  // prompt the user or whatever you're supposed to do

  // needsNumber = create a variable to store if the user wants a number in their password
  // ask the user if they need a number in the password
  // if they do, 
  //    then set our other variable to true
  // ask the user if they need a symbol in the password
  // if needsNumber
  //  then generate a password with a number