// Assignment code
var passwordArray = [];

// creates individual arrays to include the password criteria set.
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var spCharArray = [" ","!","'","#","$","%","&","\"",")","(","*","+",",","-",".","/",":",";",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// function to generate a random number upto a maximum value.
var randomNumber = function(max) {
  // var value = Math.floor(Math.random() * (max-min+1)+min);
  var value = Math.floor(Math.random() * max);
  return value;
}

// function to get password lenght
var length = function() {
  // asks the user for a password length
  var passwordLength = window.prompt("Please enter the desired password length. Password must be between 8 to 128 characters long.");

  // check if the prompt meets the password criteria 
  if( passwordLength<8 || passwordLength > 128){
      window.alert("Please enter a number between 8 and 128");
      return length();
    }
  
  return passwordLength;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// prompts the user to select the password length and criteria
var generatePassword = function() {
  //request password length
  var passLen = length();

  //check password criteria:lowercase, uppercase, numbers and special characters
  var isLowerCase = window.confirm("Would you like to include lowercase characters? Click 'OK' for yes, 'Cancel' for no.");
  var isUpperCase = window.confirm("Would you like to include uppercase characters? Click 'OK' for yes, 'Cancel' for no.");
  var isNumeric = window.confirm("Would you like to include numeric characters? Click 'OK' for yes, 'Cancel' for no.");
  var isSpecialChar = window.confirm("Would you like to include special characters? Click 'OK' for yes, 'Cancel' for no.");
  

  // declare an array to store the selected password characters
  var passChars=[];

  // contatenate arrays to include the selected criteria in one array
  if (isLowerCase) {
    passChars=passChars.concat(lowerCaseArray);
  }
  if (isUpperCase) {
    passChars=passChars.concat(upperCaseArray);
  }
  if (isNumeric) {
    passChars=passChars.concat(numberArray);
  }
  if (isSpecialChar) {
    passChars=passChars.concat(spCharArray);
  }
  
  // validate that atleast one character type is selected.
  if (passChars.length === 0) {
    var value = window.confirm ("At least one character type must be selected. Please try again.");
    return generatePassword();
  }

  // select random characters from the contatenated array to generate a unique password
  // loop through the password lenght
  for( var i=0; i< passLen; i++) {
    // select a random number between 0 and char array lenght
    var charNum = randomNumber(passChars.length);
    
    // select the character from concatenated array and store it to the passwordArray
    passwordArray[i]=passChars[charNum];
  }
  // return the password array without the commas using .join("")
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
