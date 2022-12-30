const days=document.getElementById('days');
const labelDays=document.getElementById('days').nextElementSibling;
const hours=document.getElementById('hours');
const labelHours=document.getElementById('hours').nextElementSibling;
const minutes=document.getElementById('minutes');
const labelMinutes=document.getElementById('minutes').nextElementSibling;
const seconds=document.getElementById('seconds');
const labelSeconds=document.getElementById('seconds').nextElementSibling;

const countdown=document.getElementById('countdown');
const year = document.getElementById('year');
const loading=document.getElementById('loading');

const currentYear=new Date().getFullYear();

const newYearTime=new Date(`January 01 ${currentYear + 1} 00:00:00`);

// update year
year.textContent=currentYear+1;

// update countdown time
function updateCountDown(){
  const currentTime=new Date();
  const diff=(newYearTime-currentTime);

  // module to get only remaining time
  const ss=Math.floor(diff/1000) % 60;
  const mm=Math.floor(diff/1000/60) % 60;
  const hh=Math.floor(diff/1000/60/60) % 24;
  const dd=Math.floor(diff/1000/60/60/24);

  days.textContent= dd;
  labelDays.textContent = dd < 2 ? 'day' : 'days';
  hours.textContent= hh < 10 ? `0${hh}` : hh;
  labelHours.textContent= hh < 2 ? 'hour' : 'hours';
  minutes.textContent= mm < 10 ? `0${mm}` : mm;
  labelMinutes.textContent = mm < 2 ? 'minute' : 'minutes';
  seconds.textContent =ss < 10 ? `0${ss}` : ss;
  labelSeconds.textContent= ss < 2 ?  'second' : 'seconds';
}

// show spinner before countdown 
setTimeout(()=>{
  loading.remove();
  countdown.style.display="flex";
}, 1000);

setInterval(updateCountDown, 1000);