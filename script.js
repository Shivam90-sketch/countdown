const dayss = document.getElementById('days');
const hourss = document.getElementById('hours');
const minss = document.getElementById('mins');
const secondss = document.getElementById('seconds');

const bdy = prompt("Enter your birthday");

function coutdown(){
    const bdydate = new Date(bdy);
    const currentDate = new Date();

    const totSec = (bdydate - currentDate)/1000;

    const days = Math.floor(totSec / 3600 /24);
    const hours  = Math.floor(totSec / 3600) % 24;
    const minutes = Math.floor(totSec / 60) % 60;
    const seconds = Math.floor(totSec) % 60;

    dayss.innerHTML = properzero(days);
    hourss.innerHTML = properzero(hours);
    minss.innerHTML = properzero(minutes);
    secondss.innerHTML = properzero(seconds);
}
function properzero(time){
    return time < 10 ? `0${time}` : time;
}
coutdown();

setInterval(coutdown,1000);