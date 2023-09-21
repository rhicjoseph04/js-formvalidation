let firstname = document.forms['form']['firstname'];
let lastname = document.forms['form']['lastname'];
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
let confirmPassword = document.forms['form']['confirm']; 
let errEmail = document.getElementById('errEmail');
let errPassword = document.getElementById('errPassword');
let errFinal = document.getElementById('errFinal');
let form = document.forms['form'];


function validated(){
    let isValid = true;

    if (firstname.value.trim() === '') {
        alert("Please enter your First Name");
        firstname.style.border = "1px solid red";
        firstname.focus();
        isValid = false; 
    } else {
        firstname.style.border = "1px solid black"; 
    }

   
    if (lastname.value.trim() === '') {
        alert("Please enter your Last Name");
        lastname.style.border = "1px solid red";
        lastname.focus();
        isValid = false; 
    } else {
        lastname.style.border = "1px solid black"; 
    }

    if(email.value.length < 8){
        email.style.border = "1px solid red";
        email_error.style.display = 'block';
        email.focus();
        alert("Please Input Your Email")
        isValid = false;
    }   else {
        email.style.border = "1px solid black";
    }

    if (password.value.length < 10) {
        password.style.border = "1px solid red";
        errPassword.style.display = 'none';
        password.focus();
        password_Verify();
        alert("Need to input" + " " + (10 - password.value.length) + " " + "more character(s) for your password.");
        isValid = false;
    } else {
        password.style.border = "1px solid black";
    }
    
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = "1px solid red";
        errFinal.style.display = 'block';
        confirmPassword.focus();
        alert("Passwords don't match");
        isValid = false;
    } else {
        confirmPassword.style.border = "1px solid silver"; 

    return isValid;
}
}


firstname.addEventListener('input', firstname_Verify);
lastname.addEventListener('input', lastname_Verify);
email.addEventListener('input', email_Verify,validated);
password.addEventListener('input', password_Verify);
confirmPassword.addEventListener('input', confirmPassword_Verify); 
form.addEventListener('submit', function(event) {
    
    if (!validated()) {
       
        event.preventDefault();
    }
});



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

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid black";
        errEmail.style.display = 'none';
        return true;
    } else {
        email.style.border = "1px solid red"; 
        errEmail.style.display = 'block'; 
        return false; 
    }
}

function password_Verify() {
    if (password.value.length >= 10) {
        password.style.border = "1px solid black";
        errPassword.style.display = 'none';
        return true;
    } else {
        password.style.border = "1px solid red"; 
        errPassword.style.display = 'block'; 
        return false;
    }
}

function confirmPassword_Verify() {
    if (confirmPassword.value === password.value) {
        confirmPassword.style.border = "1px solid silver";
        errFinal.style.display = 'none'; 
        return true;
    } else {
        confirmPassword.style.border = "1px solid red"; 
        errFinal.style.display = 'block'; 
        return false; 
    }
}







