const num = 10;
if(num == 11){
    console.log("print from if");
} else if(num == 44){
    console.log("print from else if");
} else{
    console.log("print from else");
}

// switch
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);