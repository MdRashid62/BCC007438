var checkDate = new Date();

var milliSecSinceJan1_1970 = checkDate.getTime();
var minutesSinceJan1_1970 = (milliSecSinceJan1_1970/60000);

console.log("Current Date: " + checkDate);
console.log("Elapsed milliseconds since January 1, 1970: " + milliSecSinceJan1_1970);
console.log("Elapsed minutes since January 1, 1970: " + minutesSinceJan1_1970);