//question1

let describeValue = (value)=>{
    let val1 = typeof value;
    let val2 = value? "truthy" : "falsy";
    return `${val1} | ${val2}`;
}

//question2

let getDayType = (day)=>{
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

let validateUsername = (username)=>{
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

//question4

let getCngFare = (distance, isNight=false, waitingMinutes=0)=>{
    let fare = 50;
    if(distance>2){
        fare += (distance-2) * 15;
    }
    if(waitingMinutes>0){
        fare += waitingMinutes * 2;
    }
    if(isNight){
        fare += (fare*20)/100;
    }
    return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));