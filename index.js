window.onload = function(){
  let monthsLeftDiv = document.getElementById("months-left");
  let weeksLeftDiv = document.getElementById("weeks-left");
  let daysLeftDiv = document.getElementById("days-left");
  let hoursLeftDiv = document.getElementById("hours-left");
  let minutesLeftDiv = document.getElementById("minutes-left");
  let secondsLeftDiv = document.getElementById("seconds-left");
  
  let today = new Date();
  let endDate = new Date('September 14, 2026');
  let msRemaining = (endDate - today);

  //1000 ms -> 1 second 
  //60 seconds -> 1 min
  //60 min -> 1 hr
  //24 hr -> 1 day
  //7 days -> 1 week
  //365 days -> 1 year

  let monthsRemaining = ((12 * msRemaining) / (1000*60*60*24*365));
  console.log(monthsRemaining);
  let wholeMonths = Math.floor(Math.abs(monthsRemaining));
  monthsLeftDiv.textContent = wholeMonths;
  console.log(wholeMonths);
  
  let decimalMonths = Math.abs(Math.abs(monthsRemaining) - wholeMonths);
  
  let weeksRemaining = ((365 * decimalMonths) / (12 * 7));
  let wholeWeeks = Math.floor(Math.abs(weeksRemaining));
  weeksLeftDiv.textContent = wholeWeeks;
  console.log(wholeWeeks);

  let decimalWeeks = Math.abs(Math.abs(weeksRemaining) - wholeWeeks);

  let daysRemaining = (decimalWeeks * 7);
  let wholeDays = Math.floor(Math.abs(daysRemaining));
  daysLeftDiv.textContent = wholeDays;
  console.log(wholeDays);

  let decimalDays = Math.abs(Math.abs(daysRemaining) - wholeDays);

  let hoursRemaining = (decimalDays * 24);
  let wholeHours = Math.floor(Math.abs(hoursRemaining));
  hoursLeftDiv.textContent = wholeHours;
  console.log(wholeHours);

  let decimalHours = Math.abs(Math.abs(hoursRemaining) - wholeHours);

  let minutesRemaining = (decimalHours * 60);
  let wholeMinutes = Math.floor(Math.abs(minutesRemaining));
  minutesLeftDiv.textContent = wholeMinutes;
  console.log(wholeMinutes);

  let decimalSeconds = Math.abs(Math.abs(minutesRemaining) - minutesRemaining);

  let secondsRemaining = (decimalSeconds * 60);
  let wholeSeconds = Math.floor(Math.abs(secondsRemaining));
  secondsLeftDiv.textContent = wholeSeconds;
  console.log(wholeSeconds);
}
