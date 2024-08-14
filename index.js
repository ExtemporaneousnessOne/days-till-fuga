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
  //12 months -> 1 year
  //365 days -> 1 year

  let monthsRemaining = ((12 * msRemaining) / (1000*60*60*24*365));
  console.log(monthsRemaining);
  let wholeMonths = Math.floor(Math.abs(monthsRemaining));
  monthsLeftDiv.textContent = wholeMonths;
  console.log(wholeMonths);

  let weeksRemaining = ((monthsRemaining - Math.floor(Math.abs(monthsRemaining))) / (1000 * 60 * 60 * 24 * 7));
  console.log(weeksRemaining);
  let wholeWeeks = Math.floor(Math.abs(weeksRemaining));
  weeksLeftDiv.textContent = wholeWeeks;
  console.log(wholeWeeks);

  let daysRemaining = ((weeksRemaining - Math.floor(Math.abs(weeksRemaining)) ) / (1000 * 60 * 60 * 24));
  console.log(daysRemaining);
  let wholeDays = Math.floor(Math.abs(daysRemaining));
  daysLeftDiv.textContent = wholeDays;
  console.log(wholeDays);

  let hoursRemaining = ((daysRemaining - Math.floor(Math.abs(daysRemaining))) / (1000 * 60 * 60));
  console.log(hoursRemaining);
  let wholeHours = Math.floor(Math.abs(hoursRemaining));
  hoursLeftDiv.textContent = wholeHours;
  console.log(wholeHours);

  let minutesRemaining = ((hoursRemaining - Math.floor(Math.abs(hoursRemaining))) / (1000 * 60));
  console.log(minutesRemaining);
  let wholeMinutes = Math.floor(Math.abs(minutesRemaining));
  minutesLeftDiv.textContent = wholeMinutes;
  console.log(wholeMinutes);

  let secondsRemaining = ((minutesRemaining - Math.floor(Math.abs(minutesRemaining))) / (1000));
  console.log(secondsRemaining);
  let wholeSeconds = Math.floor(Math.abs(secondsRemaining));
  secondsLeftDiv.textContent = wholeSeconds;
  console.log(wholeSeconds);
}
