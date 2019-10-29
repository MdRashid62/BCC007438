//EMAIL VALIDATION
var email = prompt("Enter your Email");
condition = /\S+@\S+\.\S+/;

var emailValidation;
if(email.match(condition)){
    emailValidation = true;
}
else{
    emailValidation = false;
}
if(emailValidation ===true){
    alert("Your Email is valid");
}
else if(emailValidation === false){
    alert("Please enter a valid email");
}