//question1

describeValue = (value)=>{
    let val1 = typeof value;
    let val2 = value? "truthy" : "falsy";
    return `${val1} | ${val2}`;
}

//question2

getDayType = (day)=>{
    day=day.toLowerCase();
    switch(day){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

//question3

validateUsername = (username)=>{
    if(username.length<4){
        return "Too Short";
    }
    else if(username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}