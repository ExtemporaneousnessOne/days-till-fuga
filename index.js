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

  let monthsRemaining = ((12 * msRemaining) / (1000*60*60*24*365)); //in ms -> month
  console.log(monthsRemaining.toString() + " - monthsRemaining"); 
  let wholeMonths = Math.floor(Math.abs(monthsRemaining)); //non decimal portion of months
  monthsLeftDiv.textContent = wholeMonths.toString().padStart(2, '0');  
  console.log(wholeMonths.toString() + " - wholeMonths");

  let weeksRemaining = (((monthsRemaining - Math.floor(Math.abs(monthsRemaining))) * 365) / (12 * 7)); //in month -> week
  console.log(weeksRemaining.toString() + " - weeksRemaining");
  let wholeWeeks = Math.floor(Math.abs(weeksRemaining)); //non decimal portion of weeks
  weeksLeftDiv.textContent = wholeWeeks.toString().padStart(2, '0');
  console.log(wholeWeeks.toString() + " - wholeWeeks");

  let daysRemaining = ((weeksRemaining - Math.floor(Math.abs(weeksRemaining))) * 7); //in week -> days
  console.log(daysRemaining.toString() + " - daysRemaining");
  let wholeDays = Math.floor(Math.abs(daysRemaining)); //non decimal portion of days
  daysLeftDiv.textContent = wholeDays.toString().padStart(2, '0');
  console.log(wholeDays.toString() + " - wholeDays");

  let hoursRemaining = ((daysRemaining - Math.floor(Math.abs(daysRemaining))) * 24); //in days -> hours 
  console.log(hoursRemaining.toString() + " - hoursRemaining");
  let wholeHours = Math.floor(Math.abs(hoursRemaining)); //non decimal portion of hours
  hoursLeftDiv.textContent = wholeHours.toString().padStart(2, '0');
  console.log(wholeHours.toString() + " - wholeHours");

  let minutesRemaining = ((hoursRemaining - Math.floor(Math.abs(hoursRemaining))) * 60); //hours -> min
  console.log(minutesRemaining.toString() + " - minutesRemaining");
  let wholeMinutes = Math.floor(Math.abs(minutesRemaining)); //non decimal portion of minutes
  minutesLeftDiv.textContent = wholeMinutes.toString().padStart(2, '0');
  console.log(wholeMinutes.toString() + " - wholeMinutes");

  let secondsRemaining = ((minutesRemaining - Math.floor(Math.abs(minutesRemaining))) * 60); //mins -> seconds
  console.log(secondsRemaining.toString() + " - secondsRemaining");
  let wholeSeconds = Math.floor(Math.abs(secondsRemaining));//non decimal portion of seconds
  secondsLeftDiv.textContent = wholeSeconds.toString().padStart(2, '0');
  console.log(wholeSeconds.toString() + " - wholeSeconds");
}
