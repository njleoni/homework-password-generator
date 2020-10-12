// Assignment Code
var generateBtn = document.querySelector("#generate");

// variable for numbers options
var numbers = "1234567890";
//variable for LOWER letter options
var alphabet = "abcdefghijklmnopqrstuvwxyz"
//variable for UPPER letter options
var alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// variable for special characters
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var characters = [];
var pwLength = [];
var passCode = [];

function generatePassword() {
  // variable for characters
  var characters = [];
  var merged = [];
  var passCode = [];
  // var password = [];

  //pw length will be fed to the for loop
  var pwLength = parseInt(
    prompt("Password length must be between 8 and 128, how many characters would you like your password to be?")
  );
  // checks if password meets the criteria
  if (pwLength >= 8 && pwLength <= 128) {
    var confirmCharacters = confirm(
      "Would you like to use special characters?"
    );
    // asks user if they would like to user upper case characters in their password
    var confirmUpper = confirm(
      "Would you like to use confirmUpper case characters?"
    );
    // asks user if they would like to use lower case characters in their password
    var confirmLower = confirm(
      "Would you like to use confirmLower case characters?"
    );
    // asks user if they would like to user numbers in their password
    var confirmNumbers = confirm(
      "Would you like to use confirmNumbers characters?"
    );
    //checks which characters are to be included into the random password generator by true or false statements below
    if (confirmCharacters) {
      characters.push(special)
    }
    if (confirmLower) {
      characters.push(alphabet)
    }
    if (confirmUpper) {
      characters.push(alphabetUp)
    }
    if (confirmNumbers) {
      characters.push(numbers)
    } 
    //if they do not make any character selections, they will received an error message
    else if (!confirmCharacters && !confirmLower && !confirmUpper && !confirmNumbers){
      alert("You have to pick something!");
    }
    //if the length criteria isn't met, they will received an error message
  } else {
    alert("Does not meet the criteria. Please enter a new value from 8 to 128.");
  }
    
  // var merged = characters.concat(characters1, characters2, characters3);
  var merged = characters.join("");
    console.log(merged);
      
    //for loop will generate random password based on which characters were selected 
    // and loop will run based on the length prompt input
    for (var i = 0; i < pwLength; i++) {
      passCode += merged[Math.floor(Math.random() * merged.length)];
      password = passCode;
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      }
      
  
}
