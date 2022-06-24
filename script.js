// Assignment Code
var generateBtn = document.querySelector("#generate");
//var myInteger = 8;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var charLowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = [];
// var charSymb = ["!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/". ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword()
{
  var yesGen = window.confirm("Would you like to generate a password?");
  if (yesGen) {
    var passLength = window.prompt("How many characters would you like to include (must be between 8 and 128)?");
    if (passLength >= 8 || passLength <= 128) {
      // problem begins here -- does not pop up confirms once a number is entered
      var lowCase = window.confirm("Would you like to include lower case letters?");
      if (lowCase) {
        lowCase = true;
      } else {
        lowCase = false;
      }

      var upperCase = window.confirm("Would you like to include upper case letters?");
      if (upperCase) {
        upperCase = true;
      } else {
        upperCase = false;
      }

      var useNum = window.confirm("Would you like to include numbers?");
      if (useNum) {
        useNum = true;
      } else {
        useNum = false;
      }

      var useSymb = window.confirm("Would you like to include special characters?");
      if (useSymb) {
        useSymb = true;
      } else {
        useSymb = false;
      }

      if (lowCase == false && upperCase == false && useNum == false && useSymb == false) {
        alert("Password must contain at least one character choice.");
      } else {
        for (i=0; i < passLength.length; i++) {
          
        }
      }

    } else {
      alert("Password must be between 8 and 128 characters!");
    }
  }

  // all your code should go in here
  // prompt the user or whatever you're supposed to do

  // needsNumber = create a variable to store if the user wants a number in their password
  // ask the user if they need a number in the password
  // if they do, 
  //    then set our other variable to true
  // ask the user if they need a symbol in the password
  // if needsNumber
  //  then generate a password with a number

  return "placeholder password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// randomLetter = useLowCase[Math.floor(Math.random() * useLowCase.length)]
// duch512 @ https://gist.github.com/bendc/1e6af8f2d8027f2965da