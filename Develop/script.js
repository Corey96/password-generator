// Assignment Code
var generateBtn = document.querySelector("#generate");

/*
var passwordCharSet = '';
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/",
}
*/

function generatePassword() {
// Check to see button works
console.log("Button Clicked :)")
var passwordCharSet = '';
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/",
}

var length = window.prompt("Length of password between 8 - 128 characters", "Enter Here")
console.log(length)

// If the user clicks cancel the below will happen...
if (!length) {
  alert("You must enter a valid number to continue");
  return ""
}

// If the user selects an invalid number then the below will happen...
else if (length < 8 || length > 128) {
  passwordCharSet = parseInt(
    alert(
      "Your password must be between 8 - 128 characters long. Please select a valid number"
    )
)
return ""
} 

 
var lowercase = window.confirm("Would you like to use lowercase letters?");
if (lowercase) {
  passwordCharSet += key_strings.lowercase;
  console.log("lowercase selected")
  console.log(passwordCharSet)
}


var uppercase = window.confirm("Would you like to use upper case letters?");
if (uppercase) {  
  passwordCharSet += key_strings.uppercase;
  console.log("uppercase selected")
};

var symbols = window.confirm ("Would you like to use symbols?");
if (symbols) {
  passwordCharSet += key_strings.symbols;
  console.log("symbols selected")
}

var numbers = window.confirm ("Would you like to use numbers?");
if (numbers) {
  passwordCharSet += key_strings.numbers;
  console.log("numbers selected")
};

if (lowercase == false && uppercase == false && symbols == false && numbers == false){
  alert ("Please select 1 option") 
  return ""
}

console.log(passwordCharSet)
var password = "";
for (let i = 0; i < length; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  console.log (password)

  
}

return password;
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

