//assignment ch9-11

//1
var city = prompt("City?");
if(city === "Karachi"){
    alert("WELCOME TO THE CITY OF LIGHTS.");
}

//2
var gender = prompt("Enter your gender:");
if(gender === "Male"){
    alert("Good Morning Sir!");
}else if(gender === "Female"){
    alert("Good Morning Ma'am!");
}

//3
var trafficLight = prompt("Signal Color:");
if(trafficLight === "Red"){
    alert("Must stop!");
}else if(trafficLight === "Yellow"){
    alert("Ready to move!");
}else if(trafficLight === "Green"){
    alert("Move now!");
}

//4
var remainingFuel = prompt("Enter remaing fuel (in litres):");
if(remainingFuel < "0.25litres"){
    alert("Please refill the fuel in your car");
}


//5

//a.
var a = 4;
if (++a === 5){
alert(a);
}
document.write("<h1>a.</h1>");
document.write("Given condition for variable a is true. " , "<br/>");

//b.
var b = 82;
if (b++ === 83){
alert(b);
}
document.write("<h1>b.</h1>");
document.write("Given condition for variable b is not true." , "<br/>");


//c
var c = 12;
//condition 1
if (c++ === 13){
alert(c);
}
document.write("<h1>c.</h1>");
document.write("condition 1 is false." , "<br/>");
//condition 2
if (c === 13){
    alert(c);
}
document.write("condition 2 is true." , "<br/>");
//condition 3
if (++c < 14){
    alert(c);
}
document.write("condition 3 is false." , "<br/>");
//condition 4
if(c === 14){
    alert(c);
}
document.write("condition 4 is true.");

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals " + totalCost + ".");
}

//e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
    alert("car is smaller than cat", "<br/>");
    }


//6
var urdu = prompt("Enter your Urdu marks");
var english = prompt("Enter your English marks");
var physics = prompt("Enter your Physics marks");
var obtainedMarks = parseInt(urdu) + parseInt(english) + parseInt(physics);
var totalMarks = 300;
var percentage = obtainedMarks * 100 / totalMarks;

document.write("<h1>Marks Sheet</h1>")
document.write("Total marks : " + totalMarks + "<br/>");
document.write("Obtained marks : " + obtainedMarks + "<br/>");
document.write("Percentage : " + percentage + "<br/>");

if(percentage >= 80)
{
    document.write("Grade : A-1 <br/>");
}
else if(percentage >= 70)
{
    document.write("Grade : A <br/>");
}
else if(percentage >= 60)
{
    document.write("Grade : B <br/>");
}
else if(percentage >= 50)
{
    document.write("Grade : C <br/>");
}
else if(percentage >= 40)
{
    document.write("Grade : D <br/>");
}
else
{
    document.write("Grade : Fail <br/>");
}

// if else if Remarks

if(percentage >= 80)
{
    document.write("Remarks : Excellent");
}
else if(percentage >= 70)
{
    document.write("Remarks : Very Good");
}
else if(percentage >= 60)
{
    document.write("Remarks : Fair");
}
else if(percentage >= 50)
{
    document.write("Remarks : Need Improvement");
}
else if(percentage >= 40)
{
    document.write("Remarks : Very Poor");
}
else
{
    document.write("Remarks : Disqualified");
}

//7
var secretNum = 4;
var guessedByUser = prompt("Guess The Secret Number");
var guessedByUser = parseInt(guessedByUser);

if (guessedByUser === secretNum)
{
    alert("Bingo! Correct answer");
} else if (guessedByUser === ++ secretNum)
{
    alert("Close enough to the correct answer");
}
else{
    alert("Try again");
}

//8
var givenNum = prompt("Enter number to check it's divisiblility By 3: ");
givenNum = parseInt(givenNum);
if (givenNum % 3 === 0) {
    alert("Your number is divisible by 3");
} else if (givenNum % 3 !== 0) {
    alert("Your number is not divisible by 3");
}

//9
var checkIf = prompt("Enter an even or odd number");
checkIf = parseInt(checkIf);
if (checkIf % 2 === 0)
{
    alert("Your number is an even number");
} else if ( checkIf % 2 !== 0)
{
    alert("Your number is an odd number");
}

//10
var temp = prompt("Enter temperaturer:");
temp = parseInt(temp);
if (temp >= 40)
{
    alert("It is too hot outside.");
} else if (temp >= 30 && temp < 40)
{
    alert("The Weather today is Normal.");
} else if (temp >= 20 && temp < 30)
{
    alert("Today's Weather is cool.");
} else if (temp <= 10)
{
    alert("OMG! Today's weather is so Cool.");
}

//11
var firstNumb = prompt("Enter the first digit");
var symbol = prompt("choose your operator?\n+\n-\n*\n/\n%");
var secondNumb = prompt("enter the second digit");
firstNumb = parseInt(firstNumb);
secondNumb = parseInt(secondNumb);
var output;

if (symbol === "+") {
    output = firstNumb + secondNumb;
} else if (symbol === "-") {
    output = firstNumb - secondNumb;
} else if (symbol === "*") {
    output = firstNumb * secondNumb;
} else if (symbol === "/") {
    output = firstNumb / secondNumb;
} else if (symbol === "%") {
    output = firstNumb % secondNumb;
}

document.write("<h1>Calculator</h1>");
document.write("First digit: " + firstNumb);
document.write("<br>Computation: " + symbol);
document.write("<br>Second digit: " + secondNumb);
document.write("<br>Output: " + output);
