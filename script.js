// Assignment code here

//Variables for the different characters used for the password stored in Variables 

var lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#',  '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']','{','}'];

// Promts after the user clicks on the generate password 
function generatePass() {
    var PasswordGenerator = [];
    var passwordResult = "";
    var passCriteria= window.prompt("How many characters would you like your password to contain? ");

    // If /else statement depending on the length of character the user inputs 
    if  (passCriteria < 8 || passCriteria >128){
          window.alert("Password length must be at least 8 characters and no more than 128 characters")
          passCriteria = prompt("How many characters would you like your password to contain? ");
  }else { 
    if (confirm("Would you like to include lowercase?")) {    
          Array.prototype.push.apply(PasswordGenerator, lowerCase);
  }
    if (confirm("Would you like to include UPPERCASE?")){
          Array.prototype.push.apply(PasswordGenerator, upperCase);
  }
     if (confirm("Would you like to include Numers?")){
          Array.prototype.push.apply(PasswordGenerator, numeric);
  }
     if (confirm("Would you like to include special characters?")){
          Array.prototype.push.apply(PasswordGenerator, specialCharacters);
  }
  // Promtp for if user says no to lowercase, uppercase, numeric and special characters --- or else the password generator runs. 
      if  (lowerCase===false && upperCase===false && numeric=== false && specialCharacters===false) {
          alert("You must select at least one character type!");
          lowerCase = confirm("Would you like to use lowercase letters?");
          upperCase = confirm("Would you like to use uppercase letters?");
          numeric = confirm("Would you like to use numbers?");
          specialCharacters = confirm("Would you like to use special characters?");
   } else {
          for(var i=0;  i<passCriteria; i++){
          var random = Math.floor(Math.random()*PasswordGenerator.length);
          passwordResult += PasswordGenerator[random];
    }
    }
}
      document.getElementById("password").innerHTML = passwordResult;
      
}

// Array.prototype.push.apply was taken from https://codesource.io/working-with-javascript-array-push-method/ after one of my friends told me to look it up after struggling with this. 
//Using Array.prototype.push.apply() method we are merging 2 arrays into one. 
// For my project passwordGenerator is taking contents from lowerCase, upperCase, numeric, and specialCharacters and then at then I am calling passwordGenerator. 



  
  
  


 






