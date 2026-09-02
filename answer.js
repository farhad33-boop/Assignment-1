function describeValue(value) {
  let type = typeof value;
  let truthStatus;

  if (value) {
    truthStatus = "truthy";
  } else {
    truthStatus = "falsy";
  }

  return `${type} | ${truthStatus}`;
}

function getDayType(day) {
  let lowerDay = day.toLowerCase();

  switch(lowerDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day"

    default:
      return "Invalid Day"
  }
}

function validateUsername(username) {
        if(username.length < 4) {
          return "Too Short"
        } else if(username.includes(" ")) {
          return "No Space Allowed"
        } else if(username.toLowerCase().includes("admin")) {
          return "Reserved Word"
        } else {
          return "Available"
        }
}


function getCngFare(distance,isNight = false,waitingMinutes = 0) {
  let fare = 50;
  if(distance > 2){
    let extraDistance = distance - 2;
    fare = fare + extraDistance*15;
  }
  fare = fare + waitingMinutes*2;
  
  if(isNight){
    fare = fare*1.20;
  }
  return fare;
}

const getChaseVerdict = (target,scored,ballsLeft) => {
  let runsNeeded = target - scored;
  if(runsNeeded <= 0) {
    return "Won";
  }
  
  if(ballsLeft <= 0) {
    return "Lost"
  }
  
  let requiredRate = (runsNeeded/ballsLeft)*6;
  let verdict;
  
  if(requiredRate <= 6) {
    verdict = "Comfortable";
  } else if(requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
