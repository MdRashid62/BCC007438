var userInput = prompt("Enter your age to find your birth year:");
var currDate = new Date();
var currYear = currDate.getFullYear();
	
document.write("Your Age is: " + userInput,"<br/>");
document.write("Your Birth Year is: " + (currYear - userInput));
