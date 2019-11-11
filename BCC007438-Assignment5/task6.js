function reverse() {
    //simple array
    var array = [0,5,6,7,8];
    var array1 = [1,2,3,4];
    document.write("Simple array --->  " + array,"<br/>" + "Simple array --->  " 
    + array1,"<br/>","<br/>");

    //reverse array
    var newArray = array.reverse();
    var newArray1 = array1.reverse();
    document.write("Reverse array --->  " + newArray,"<br/>" +"Reverse array --->  " 
    +  newArray1);
}
reverse();