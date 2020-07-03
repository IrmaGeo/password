//describe variables

var userCriteria = [];
var criteria = ["numbers", "letters", "symbols"];
var passwordLength = 0;
var pass = "";
var numbers = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var symbols = "@#$%^&*()!";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var userPass = "";
var userChar = "";
var password = "";

// create function to show and choose password criteria========================
function generateCriteria() {
  while (userCriteria.length < 1) {
    var i = 0;
    while (i < criteria.length) {
      var userChoise = confirm("whould you like" + " " + criteria[i]);

      if (userChoise) {
        userCriteria.push(criteria[i]);
      }
      i = i + 1;
    }
  }
}
generateCriteria();
console.log(userCriteria);

//choose password length========================================== string doesnot allow

while (passwordLength > 128 || passwordLength < 8) {
  var passwordLength = prompt("please choose the password length");
  if (passwordLength > 128 || passwordLength < 8) {
    alert(
      "password length should be at least 8 and no more 128. please try again"
    );
  }
}

// put password elements and validate ===============

function generatepassword() {
  while (userPass.length < passwordLength) {
    var userChar = prompt(
      "choose" + " " + userCriteria + " " + "total" + " " + passwordLength
    );
    if (
      userCriteria.indexOf("numbers") === -1 &&
      numbers.indexOf(userChar) >= 0 &&
      userChar.length > 0
    ) {
      alert("do not put number!!!");
    } else if (
      userCriteria.indexOf("letters") === -1 &&
      letters.indexOf(userChar) >= 0 &&
      userChar.length > 0
    ) {
      alert("do not put letters!!!");
    } else if (
      userCriteria.indexOf("symbols") === -1 &&
      symbols.indexOf(userChar) >= 0 &&
      userChar.length > 0
    ) {
      alert("do not put symbols!!!");
    } else if (
      userChar === "" ||
      userChar.length > 1
      //||
      //upperCases.indexOf(userChar) < 0
    ) {
      alert("choosen character doesnot allow empty!");
    } else userPass = userPass + userChar;
  }
  return userPass;
}

// create write password function
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// add event listener to generate button
generateBtn = document.addEventListener("click", writePassword);
