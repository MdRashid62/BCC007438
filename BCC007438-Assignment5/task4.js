// Function for area of a circle
function circleArea(radius) {
    var area =Math.round(Math.PI* (radius * radius));
    console.log("The Area of a circle is:    " + area);
}
// Function for circumference of a circle
function circleCircum(radius) {
    var circum = Math.round(2*Math.PI*radius);
    console.log("The Circumference of circle is:    " + circum);

}
circleArea(5);
circleCircum(6);