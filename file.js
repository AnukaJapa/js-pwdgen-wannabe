let firstNameDocument = document.getElementById("firstName");
let lastNameDocument =document.getElementById("lastName");
let favoriteColorDocument =document.getElementById("favoriteColor");
let number1Document = document.getElementById("number1");
let number2Document = document.getElementById("number2");

let passwordDisplay = document.querySelector(".inputs");
let h2Display= document.querySelector("h2");
let button = document.querySelector("button");

let firstName;
let lastName;
let favoriteColor;
let number1;
let number2;
let generatedPassword;


function calc(){
if(button.textContent=="refresh"){
    location.reload();
} else {

    firstName = firstNameDocument.value;
    lastName=lastNameDocument.value;
    favoriteColor=favoriteColorDocument.value;
    number1 = number1Document.value;
    number2 =number2Document.value;
    let division = number1/number2;

    generatedPassword = firstName + lastName + favoriteColor + division; 

    passwordDisplay.textContent =generatedPassword;
    passwordDisplay.classList.add("passwordDisplay");
    h2Display.textContent = "your password is here:";
    button.textContent = "refresh";
}

}


// let firstName =prompt("Please tell us your firstname");
// let lastName =prompt("Please give us your lastname");
// let favoriteColor = prompt("plase tell us your favorite color");
// let firstNumber = prompt("plase give us some number");
// let secondNumber = prompt("plase give us some number");

// let finalNumber = firstNumber/secondNumber;
// let password = firstName+lastName+favoriteColor + finalNumber;

// console.log(password);


