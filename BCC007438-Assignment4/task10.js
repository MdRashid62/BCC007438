// round a number to a given decimal places.
var num1 = 16.765; // 2 places
var num2 = 12.37982; // 2 places
var num3 = -9.3079499 // 4 places
var decimalPlace1 = 2;
var decimalPlace2 = 2;
var decimalPlace3 = 4;

var output1 = num1.toFixed(decimalPlace1);
var output2 = num2.toFixed(decimalPlace2);
var output3 = num3.toFixed(decimalPlace3);

console.log("input: "+num1+" -----> output: "+output1);
console.log("input: "+num2+" -----> output: "+output2);
console.log("input: "+num3+" -----> output: "+output3);