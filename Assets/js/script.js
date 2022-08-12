// Assignment code
var passwordArray = [];

// individual arrays to include the password criteria set.
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var spCharArray = [" ","!","'","#","$","%","&","\"",")","(","*","+",",","-",".","/",":",";",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


// function that generates a random number upto a maximum value.
var randomNumber = function(max) {
    // var value = Math.floor(Math.random() * (max-min+1)+min);
    var value = Math.floor(Math.random() * max);
    return value;
  }

// function to get password lenght
var length = function() {
  // ask the user for a password length
  var passwordLength = window.prompt("Please enter the desired password length. Password must be between 8 to 128 characters long.");

  // check if the prompt meets the password criteria
  if( passwordLength<8 || passwordLength > 128){
    window.alert("Please enter a number between 8 and 128");
    return length();
  }  

// Get references to the #generate element

// prompts the user to select the password length and criteria
    //request password length
    //check password criteria:lowercase, uppercase, numbers and special characters
    // declare an array to store the selected password characters
    // contatenate arrays to include the selected criteria in one array
    // validate that atleast one character type is selected.

// select random characters from the contatenated array to generate a unique password
// loop through the password lenght
    // select a random number between 0 and char array lenght
    // select the character from concatenated array and store it to the passwordArray
 // return the password array without the commas using .join("")

// Write password to the #password input

// Add event listener to generate button