function validated(){
    let isValid = true;

    if (firstname.value.trim() === '') {
        alert("Please enter your First Name");
        firstname.style.border = "1px solid red";
        firstname.focus();
        isValid = false; 
    } else {
        firstname.style.border = "1px solid black"; 

  
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
    }  else {
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
    }else {
        confirmPassword.style.border = "1px solid silver"; 
    }


    return isValid;
}
}