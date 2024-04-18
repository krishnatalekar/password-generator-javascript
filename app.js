const passwordBox = document.getElementById("Password");
const passLength = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()-_=+][|}{></";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (passLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const generateBtn = document.querySelector("button");

generateBtn.addEventListener("click", () => {
    createPassword();
});

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
    copyPassword();
});