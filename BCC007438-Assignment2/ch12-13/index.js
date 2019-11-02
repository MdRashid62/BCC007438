//assignment ch12-13

//1
var charac = prompt("Enter: \nA number or an uppercase/lowercase letter.");
var checkCharac = charac.charCodeAt(0);

if (checkCharac >= 48 && checkCharac <= 57) {
    alert("You have entered a number.");
} else if (checkCharac >= 65 && checkCharac <= 90) {
    alert("You have entered an uppercase-letter.");
} else if (checkCharac >= 97 && checkCharac <= 122) {
    alert("You have entered a lowercase-letter.");
}

//2
var int1 = prompt("Enter your first number");
var int1 = parseInt(int1);
var int2 = prompt("Enter your second number");
var int2 = parseInt(int2);
var largInt;

if (int1 === int2) {
    alert("Both numbers are equal");
} else if (int1 !== int2) {
    largInt = Math.max(int1, int2);
    alert("The larger number is: " + largInt);
}

//3
var checkSign = prompt("enter a number to check if it's positive, negative, zero.");
checkSign = parseInt(checkSign);
if (checkSign > 0) {
    alert("You have entered a positive number");
} else if (checkSign < 0) {
    alert("You have entered a negative number");
} else if (checkSign === 0) {
    alert("You have entered 0");
}

//4
var chechVovel = prompt("Enter an alphabet to check if it's a vowel or not:");
chechVovel = chechVovel.toLowerCase();


if (chechVovel === "a" || chechVovel === "e" || chechVovel === "i"
    || chechVovel === "o" || chechVovel === "u")
    {
            alert("You have entered a vowel.");    
}
else
{
    alert("Your letter is not a vowel.");
}

//5
var correctPswrd = "xyz";
var pswrd = prompt("Please enter your password");

if (pswrd === "")
{
    alert("Please enter your password");
} else if (pswrd === correctPswrd)
{
    alert("Correct! The password you have entered matches the original password.");
} else if (pswrd !== correctPswrd)
{
    alert("Incorrect password");    
}

//6
var greeting;
var hour = 13;
if (hour < 18)
{
    greeting = "Good day";
    alert(greeting);
} else
{
    greeting = "Good evening";
    alert(greeting);
}


//7
var currentTime = prompt("Enter your current time (24-HR Format)");

if (currentTime >= 0000 && currentTime < 1200)
{
    alert("Good morning!");
}
else if (currentTime >= 1200 && currentTime < 1700)
{
    alert("Good afternoon!");
}
else if (currentTime >= 1700 && currentTime < 2100)
{
    alert("Good evening!");
}
else if (currentTime >= 2100 && currentTime <= 2359)
{
    alert("Good night!");
}