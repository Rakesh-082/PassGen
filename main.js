const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789" ;
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    password += number[Math.floor(Math.random()*number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    if(passwordBox.value == 0){
        window.alert("Please generate a password!!");
    }
    else{
        window.alert("Password has been copied");
    }
}

