//An array of numbers that we want to get the average of.
var nums = [6, 6, 6];
var nums1 = [1, 2, 4, 5];
 
//Work out the sum of the numbers in our array.
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}

var totalSum1 = 0;
for(var j in nums1) {
    totalSum1 += nums1[j];
}
 
//Work out how many numbers are in our array.
var numsCnt = nums.length;
var numsCnt1 = nums1.length;
 
//Finally, get the average.
var average = totalSum / numsCnt;
var average1 = totalSum1 / numsCnt1;
 
//Print the mean / average to the console.
console.log("Average is: " + average);
console.log("Average is: " + average1);