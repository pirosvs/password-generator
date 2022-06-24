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
// - NEED TO CHECK THAT CONFIRMS ARE ADDING CORRECT VALUE TO ARRAY OF FUNCTIONS, ETC

var charLowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// do they need to be strings or can they just be ints?
var charSymb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var selectedChoice = [];
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
    if (passLength >= 8 && passLength <= 128) {
      var lowCase = window.confirm("Would you like to include lower case letters?");
      // do i need to have the following conditionals if using a confirm? -- NO
      if (lowCase) {
        selectedChoice.push(charLowCase);
      // }

      var upperCase = window.confirm("Would you like to include upper case letters?");
      if (upperCase) {
        selectedChoice.push(charUpperCase);
      }

      var useNum = window.confirm("Would you like to include numbers?");
      if (useNum) {
        selectedChoice.push(charNum);
      }

      var useSymb = window.confirm("Would you like to include special characters?");
      if (useSymb) {
        selectedChoice.push(charSymb);
      }

      console.log(selectedChoice);

      // // do i need to create a variable to contain which options selected? can use conditional w/in
      // // each confirm to (add? return true?) push to add each to array randomChoice if return true?

      if (lowCase == false && upperCase == false && useNum == false && useSymb == false) {
        alert("Password must contain at least one character choice.");
      // } else {
      //   // do i need an else if for every possible set of chars chosen?
      //   for (i=0; i < passLength.length; i++) {
      //     // how do I randomize which thing it chooses of the selected options?
      //     randomChoice = selectedChoice[Math.floor(Math.random() * selectedChoice)];
        }
      }

    } else {
      alert("Password must be between 8 and 128 characters.");
    }
  }

  return "placeholder password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// would it look like:
// var randonLowCase = function(charLowCase[Math.floor(Math.random() * charLowCase.length)]);

// function randomLowCase() {
  // return charLowCase[Math.floor(Math.random() * charLowCase.length)];}

// randomLowCase = charLowCase[Math.floor(Math.random() * charLowCase.length)];

// ---------------------------------------------------------------------

// function () {
  // return randomChoice = randomChoice[Math.floor(Math.random() * randomChoice)];}
  // may need to change name before =, meant to randomize which char set to choose

// function () {
  // return randomLowCase = charLowCase[Math.floor(Math.random() * charLowCase.length)];}

// function () {
//  return randomUpperCase = charUpperCase[Math.floor(Math.random() * charUpperCase.length)];}

// function () {
//  return randomNum = charNum[Math.floor(Math.random() * charNum.length)];}

// function () {
//  return randomSymb = charSymb[Math.floor(Math.random() * charSymb.length)];}

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