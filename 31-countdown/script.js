const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const countdown=document.getElementById('countdown');

const currentYear=new Date().getFullYear();

const newYearTime=new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown(){
  const currentTime=new Date();
  const diff=(newYearTime-currentTime);

  // module to get only remaining time
  const ss=Math.floor(diff/1000) % 60;
  const mm=Math.floor(diff/1000/60) % 60;
  const hh=Math.floor(diff/1000/60/60) % 24;
  const dd=Math.floor(diff/1000/60/60/24);

  days.innerHTML=dd;
  hours.innerHTML=hh < 10 ? `0${hh}` : hh;
  minutes.textContent=mm < 10 ? `0${mm}` : mm;
  seconds.textContent=ss < 10 ? `0${ss}` : ss;
}

setInterval(updateCountDown, 1000);