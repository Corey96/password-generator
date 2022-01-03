// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharSet = '';
const key_strings = {
  lowercase: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
  uppercase: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  numbers: "0,1,2,3,4,5,6,7,8,9",
  symbols: "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/",
}

function generatePassword() {
// Check to see button works
console.log("Button Clicked :)")

var length = window.prompt ("Length of password between 8 - 128 characters", "Enter Here")
console.log(length)

// If the user clicks cancel the below will happen...
if (!passwordCharSet) {
  alert("You must enter a valid value to continue");
}

// If the user selects an invalid number then the below will happen...
else if (passwordCharSet < 8 || passwordCharSet > 128) {
  passwordCharSet = parseInt(
    alert(
      "Your password must be between 8 - 128 characters long. Please select a valid number"
    )
  );



var lowercase = window.confirm("Would you like to use lowercase letters?");
if (lowercase) {
  passwordCharSet += key_strings.lowercase;
  console.log("lowercase selected")
};

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

var password = "";
for (let i = 0; i < length; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  console.log (password)
}

return password;


}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

