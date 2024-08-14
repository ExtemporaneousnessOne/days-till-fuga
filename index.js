window.onload = function(){
  let monthsLeftDiv = document.getElementById("months-left");
  
  let today = new Date();
  let endDate = new Date('September 14, 2026');
  let msRemaining = (endDate - today);

  let monthsRemaining = ((12 * msRemaining) / (1000*60*60*24*365));
  console.log(monthsRemaining);
}
