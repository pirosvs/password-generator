// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passW = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passW;

}

// KNOWN ISSUES:


var charLowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSymb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

// Creates empty array to concatenate the character sets selected upon confirming true
var selectedChoice = [];

// Randomizes which value in the array selectedChoice will be chosen
function randomChoice(options) {
  console.log(options);
  return options[Math.floor(Math.random() * options.length)];
}

function generatePassword()
{
  var password = "";
  var yesGen = window.confirm("Would you like to generate a password?");

  // Prompts user to give the length of the password desired and converts input string to integer
  if (yesGen) {
    var passLength = window.prompt("How many characters would you like to include (must be between 8 and 128)?");
    passLength = parseInt(passLength);

    // Verifies that the password length will be at least 8 and below 129, prompting for which characters to include
    // if in the correct amount, otherwise tells user they need to select a number between 8-128
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

      // Checks that user has selected at least one type of character and tells them to go back and choose
      // at least one character type if they had not
      if (!lowCase && !upperCase && !useNum && !useSymb) {
        alert("Password must contain at least one character choice.");

      // If the user has selected at least one or more character types, loops through for the number given for password 
      // length and uses our randomizing function to add each random value to a new password
      } else {
          for (i=0; i < passLength; i++) {
           password = password + randomChoice(selectedChoice);
          } console.log(password);
      }
      
      // If user input for password length is lower than 8 or higher than 128, alerts user that password must
      // contain 8-128 characters and exits 
      } else {
        alert("Password must be between 8 and 128 characters.");
      }

    // States that password will not be generated if confirm to make password equals false
    } else {
      alert("Password will not be generated.");
    }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ---------------------------------------------------------------------

// duch512 @ https://gist.github.com/bendc/1e6af8f2d8027f2965da

  // needsNumber = create a variable to store if the user wants a number in their password
  // ask the user if they need a number in the password
  // if they do, 
  //    then set our other variable to true
  // ask the user if they need a symbol in the password
  // if needsNumber
  //  then generate a password with a number