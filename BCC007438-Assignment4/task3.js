var passw = prompt("Enter your password");
var passwLenth = passw.length;
condition = /^[0-9a-zA-Z]+$/;

//condition for alphabets and numbers
var firstCondition;
if(passw.match(condition)){
    firstCondition = true;
}
else{
    firstCondition = false;
}

//condition for it should not start with a number
var secondCondition;
if(passw.charCodeAt(0) >=49 && passw.charCodeAt(0) <=57){
    secondCondition = false;
}
else{
    secondCondition = true;
}

//condition for at least 8 characters long
var thirdCondition;
if(passwLenth <=8){
    thirdCondition = true;
}
else{
    thirdCondition = false;
}

//if above conditions does not meet
if(firstCondition === true && secondCondition === true && thirdCondition === true){
    alert("Strong password");
}
else{
    alert("Please enter a valid password");
}