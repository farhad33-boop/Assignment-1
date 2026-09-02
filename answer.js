function describeValue(value) {
  let type = typeof value;
  let truthStatus;

  if (value) {
    truthStatus = "truthy";
  } else {
    truthStatus = "falsy";
  }

  return `${type} | ${truthStatus};`
}

function getDayType(day) {
  let lowerDay = day.lowerCase();

  switch(lowerDay) {
    case "friday":
    case "Saturday":
      return "Weekend";

    case "sunday"
    case "monday"
    case "twesday"
    case "wednesday"
    case "thursday"
      return "Working Day"

    default:
      return "Invalid Day"
  }
}
