// ======================= Switch =========================
/*
    switch (condition){
        CASE condition: 
            # Definition
            break
            Note: if we don't use break it will run the next CASE

        default:
            # Definition
        Note: If none of the conditions matched, then default case will be executed

    }

*/


switch (new Date().getDay()) {
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
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        console.log("If none of the conditions matched, then default case will be executed")
}

console.log(day);