let firstNameDocument = document.getElementById("firstName");
let lastNameDocument =document.getElementById("lastName");
let favoriteColorDocument =document.getElementById("favoriteColor");
let number1Document = document.getElementById("number1");
let number2Document = document.getElementById("number2");
let firstName;
let lastName;
let favoriteColor;
let number1;
let number2;
let generatedPassword;


function calc(){
    firstName = firstNameDocument.value;
    lastName=lastNameDocument.value;
    favoriteColor=favoriteColorDocument.value;
    number1 = number1Document.value;
    number2 =number2Document.value;
    let division = number1/number2;

    generatedPassword = firstName + lastName + favoriteColor + division; 
    console.log(generatedPassword);
}

// let firstName =prompt("Please tell us your firstname");
// let lastName =prompt("Please give us your lastname");
// let favoriteColor = prompt("plase tell us your favorite color");
// let firstNumber = prompt("plase give us some number");
// let secondNumber = prompt("plase give us some number");

// let finalNumber = firstNumber/secondNumber;
// let password = firstName+lastName+favoriteColor + finalNumber;

// console.log(password);


