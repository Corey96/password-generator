// Assignment Code
var generateBtn = document.querySelector("#generate");
const characters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
const charactersUpper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
const numbers = "0,1,2,3,4,5,6,7,8,9"
const specialCharacters = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
const passwordLength = 128
let passwordValue = ''

function generatePassword() {
console.log("Button clicked")

let userChoice = window.prompt ("Enter password length between 0 and 128 characters");
let specialCharacters = window.prompt ("Include special characters?");
  if ("yes") then 
let incNumbers = window.prompt ("Include numbers?") ; 
  
  


return ("generated password will go here")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
