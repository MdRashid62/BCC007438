// add weeks in current date
function addWeeks(add) {
    var current = new Date();
    current.setDate(current.getDate() + add*7);
    return console.log(current);
}
addWeeks(3);
addWeeks(10);