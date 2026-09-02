//question1

function describeValue(value){
    let val1 = typeof value;
    let val2 = value? "truthy" : "falsy";
    return `${val1} | ${val2}`;
}

//question2

function getDayType(day){
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

function validateUsername (username){
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

function getCngFare(distance, isNight=false, waitingMinutes=0){
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

//question5

const getChaseVerdict = (target, scored, ballsLeft)=>{
    let runsNeeded = target - scored;
    if(runsNeeded <= 0){
        return "Won";
    }
    if(ballsLeft <= 0){
        return "Lost";
    }
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    if(requiredRate <= 6){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    }
    else if(requiredRate > 6 && requiredRate <= 12){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    }
    else{
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
}