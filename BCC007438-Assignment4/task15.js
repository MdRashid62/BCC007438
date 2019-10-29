var day = "10";
var month = "Feb";
var year = "1997";
var dOB = (day + month + year);

var date1 = new Date();
var date2 = new Date(dOB);
var age = (date1.getFullYear() - date2.getFullYear());
var birthYear = (date2.getFullYear());

console.log("Your age is: " + age);
console.log("Your birth year is: " + birthYear);