export default function getTimeAgo(timestamp) {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);
  const timeDifference = Math.abs(currentTime - pastTime);

  if (timeDifference === 0) {
    return "Now";
  }

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30; // Approximate, not exact

  let agoString;

  if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    agoString = `${minutesAgo} ${minutesAgo === 1 ? "min" : "mins"} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    agoString = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);
    agoString = `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < month) {
    const weeksAgo = Math.floor(timeDifference / week);
    agoString = `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
  } else {
    const monthsAgo = Math.floor(timeDifference / month);
    agoString = `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  }

  return agoString;
}
