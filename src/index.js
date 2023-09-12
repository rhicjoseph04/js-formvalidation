import './css/index.css';

let firstname = document.forms['form']['firstname'];
let lastname = document.forms['form']['lastname'];
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
let confirmPassword = document.forms['form']['confirm']; 
let errEmail = document.getElementById('errEmail');
let errPassword = document.getElementById('errPassword');
let errFinal = document.getElementById('errFinal');

firstname.addEventListener('input', firstname_Verify);
lastname.addEventListener('input', lastname_Verify);
email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);
confirmPassword.addEventListener('input', confirmPassword_Verify); 


function firstname_Verify() {
    if (firstname.value.trim() === '') {
        alert("Please enter your First Name");
        firstname.style.border = "1px solid red";
        firstname.focus();
        return false;
    } else {
        firstname.style.border = "1px solid black";
        return true;
    }
}

function lastname_Verify() {
    if (lastname.value.trim() === '') {
        alert("Please enter your last Name");
        lastname.style.border = "1px solid red";
        lastname.focus();
        return false;
    } else {
        lastname.style.border = "1px solid black";
        return true;
    }
}


function email_Verify(){
   
    if (email.value.length >= 8){
        email.style.border = "1px solid black";
        errEmail.style.display = 'none';
        return true;
    }

}

function password_Verify(){
    if (password.value.length >= 10){
        password.style.border = "1px solid black";
        errPassword.style.display = 'none';
        return false;
    }
}

function confirmPassword_Verify() {
    if (confirmPassword.value === password.value) { 
        confirmPassword.style.border = "1px solid silver";
        errFinal.style.display = 'none';
        return false;
    }
}

function validated(){
    if(email.value.length < 8){
        email.style.border = "1px solid red";
        email_error.style.display = 'block';
        email.focus();
        alert("Please Input Your Email")
        return false;
    } 

    if (password.value.length < 10) {
        password.style.border = "1px solid red";
        errPassword.style.display = 'display';
        password.focus();
        password_Verify();
        alert("Need to input" + " " + (10 - password.value.length) + " " + "more character(s) for your password.");
        return false;
    }
    
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = "1px solid red";
        errFinal.style.display = 'block';
        confirmPassword.focus();
        alert("Passwords don't match");
        return false;
    }
}