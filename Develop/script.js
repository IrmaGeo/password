//click the button presented password criteria, ask input parametres and length, generate password and write

// create function for ask a customer password length, validaite and save.
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

function generateLength() {
  var passLenght = prompt("choose password lengh");
  if (passLenght < 8 || passLenght > 128) {
    alert("your password lengh is not between 8 and 128");
  } else return passLenght;
}

// generate input parametre
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function askInput(number, symbol, upercase) {
  var askInput = prompt(
    "please choose the password criteria: easy, middle, strong"
  );
  var criteria = "include numbers";

  return passCriteria;
}

//create function for generate random number and letters
function generateRendomLetters() {
  return numbers;
}
//create function fot generate random symbols
function generateRendomSymbols() {
  r = new Random();
  return String.valueOf(char(r.nextInt(95) + 32));
  //return generateRendomSymbols;
}

//create generate password function with input parametres lenght, password criteria
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
function generatePassword() {
  if (askInput === "easy") {
    var letter = generateRendomLetters();
    var symbol = generateRendomSymbols();
    var password = letter + symbol;
  }

  return password;
}

// create write the password funtion

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// generate the password follow the input parametrs
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
document.getElementById("generate").addEventListener("click", function () {
  var criteria = confirm(
    "password must includes numbers, letters,special symbols and at least one upercase letter and length must be at least 8 no more 128"
  );
  //askInput();
  generateLength();
  generatePassword();
  //writePassword();
  console.log(generatePassword());
});

// Assignment Code
// var generateBtn = document.querySelector("#generate")
