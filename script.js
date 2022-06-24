// Assignment Code
var generateBtn = document.querySelector("#generate");
//var myInteger = 8;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var passLength = 0;
var lowCase;
var upperCase;
var useNum;
var useSymb;

function generatePassword()
{
  var yesGen = window.confirm("Would you like to generate a password?");
  if (yesGen) {
    var passLength = window.prompt("How many characters would you like to include (must be between 8 and 128)?");
    if (passLength >= 8 || passLength <= 128) {

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
