// Area of rectangle
var length = prompt("Enter the length of your rectangle:");
var width = prompt("Enter the width your recangle:");

function area(length, width){
    return length*width;
}
document.write("The area of your rectangle is: "+ area(length, width));