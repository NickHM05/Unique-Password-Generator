// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
   var userInput = window.prompt("How long will your password be?")

   var passwordLength = parseInt(userInput)

 /*NaN stands for is not a number. */ 
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
 }

 if (passwordLength < 8 || passwordLength > 128) {
   window.alert("Password character length must be between 8 and 128 characters in order to continue")
   return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercaseletters = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercaseletters = window.confirm("Would you like to include uppercase letters in your password?")  

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var UppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
}


// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
