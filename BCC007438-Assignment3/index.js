//Q1. qualifications in Pakistan

var qualifications = [];
qualifications[0] = "SSC";
qualifications[1] = "HSC";
qualifications[2] = "BCS";
qualifications[3] = "BS";
qualifications[4] = "B.COM";
qualifications[5] = "MS";
qualifications[6] = "M. Phil";
qualifications[7] = "PhD";

document.write("<h1>QUALIFICATIONS:</h1>");

document.write("1) " + qualifications[0] , "<br/>");
document.write("2) " + qualifications[1] , "<br/>");
document.write("3) " + qualifications[2] , "<br/>");
document.write("4) " + qualifications[3] , "<br/>");
document.write("5) " + qualifications[4] , "<br/>");
document.write("6) " + qualifications[5] , "<br/>");
document.write("7) " + qualifications[6] , "<br/>");
document.write("8) " + qualifications[7]);

//Q2. 

var stdNames = ["Michael", "John", "Tony"];
var stdMarks = [320, 230, 480];
var totalMarks = 500;

var michaelPercentage = stdMarks[0]*100/totalMarks;
var johnPercentage = stdMarks[1]*100/totalMarks;
var tonyPercentage = stdMarks[2]*100/totalMarks;

document.write("<h1>Marksheet:</h1>");
document.write("Score of "+ stdNames[0] + " is " + stdMarks[0]+". " + "Percentage: " + michaelPercentage+"%", "<br/>");
document.write("Score of "+ stdNames[1] + " is " + stdMarks[1]+". " + "Percentage: " + johnPercentage+"%", "<br/>");
document.write("Score of "+ stdNames[2] + " is " + stdMarks[2]+". " + "Percentage: " + tonyPercentage+"%");



//Q3.

var colors = ["Red ", "Green ", "Blue "];

document.write("Colors: " + colors); 
//A.
colors.unshift(prompt("What color do you want to add At the beginning?"));
//B.
colors.push(prompt("What color do you want to add at The end?"));
//C.
colors.unshift("Pink", "Purple");
//D.
colors.shift();
//E
colors.pop();

document.write("<br> After adding: " + colors);

    //F.
var colorIndex = prompt("Which Index Do You Want To Add Your Color Name At?");
var colorName = prompt("Which Color Name Do You Want To Add");

colors.splice(colorIndex, 0, colorName);

document.write("<br> Your Colors Added: " + colors);

    //G.
var deleteIndex = prompt("At Which Index Do You Want To Delete The Colors From?");
var deleteAmount = prompt("How Many Color Do You Want To Delet?");

colors.splice(deleteIndex, deleteAmount);

document.write("<br> " + colors);


document.write("<br>");


//Q4.

var myArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list:" + "<br/>" +myArray + "<br/>","<br/>");
//slice
var newArray = myArray.slice(2,4);
document.write("Selected cities list:" + "<br/>" +newArray);


//Q5.  remove all duplicate items from an array

var numbers = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

document.write([...new Set(numbers)]);


//Q6. Choice of Cities

var oCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd"]; 
var citiesLen = oCities.length;

for (var i = 0; i < 3; i++) {
    document.write("<br>" + (i + 1) + o[i] + " Choice is " + oCities[i]);
}




//Q7.

var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var c = b.concat(a); //
var cLen = c.length;
var output = [];

for (var i = 0; i < cLen; i++) {
    if (output.indexOf(c[i]) === -1) {
        output.push(c[i]);
    }
}
document.write("<br> Union: " + output);



//Q8. Series

    //a. Counting 
for (var i = 1; i < 16; i++) {
    document.write(i + ",");
}
document.write("<br>");

    // b. backwards counting 
for (var i = 10; i > 0; i--) {
    document.write(i + ",");
}
document.write("<br>");

    //c. odd & even series
for (var i = 0; i < 22; i++) { 
    if ((i % 2) === 0) {
        document.write(i + ",");
    }
}
document.write("<br>");
for (var i = 0; i < 20; i++) { 
    if ((i % 2) !== 0) {
        document.write(i + ",");
    }
}
document.write("<br>");

    // 2k series
for (var i = 2; i < 22; i++) { 
    if ((i % 2) === 0) {
        document.write(i + "k, ");
    }
}
document.write("<br>");
document.write("<br>");


//Q9. identify largest number in an Array

var randomArray = [24, 53, 78, 91, 12];
document.write("Array items: 24, 53, 78, 91, 12", "<br/>")
document.write("The Largest Number Is: " + Math.max(...randomArray)); 



//Q10. Sorting out an array from smallest to largest value

var arrayA = [20, 53, 78, 4, 91, 12];
var ascendarrayA = arrayA.sort(function(a,b){return a-b});

document.write("<br>Output: " + ascendarrayA);