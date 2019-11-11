function weekend(date){
    var date = prompt("Enter Date: ");
    
    var input = new Date(date);
    var day = input.getDay();

    switch(day){
        case 1:
            return alert("Sorry! wait for 4 more days");
            break;
        case 2:
            return alert("Sorry! wait for 3 more days");
            break;
        case 3:
            return alert("Sorry! wait for 2 more days");
            break;
        case 4:
            return alert("Sorry! wait for 1 more day");
            break;
        case 5: 
            return alert ("Sorry! Weekend starts tommorrow");
            break;
        case 6:
            return alert("Its weekend");
            break;    
    }
}

weekend();
