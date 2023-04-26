
let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}
function start() {
    if (timer != null)
        clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
}
function pause() {
    clearInterval(timer);
}
function restart() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let audio1 = new Audio();
audio1.src = "assets/click.mp3";
button1.addEventListener('click', function () {
    audio1.play();
});
button2.addEventListener('click', function () {
    audio1.play();
});
button3.addEventListener('click', function () {
    audio1.play();
});

const deg = 6;
const sc = document.querySelector('#clockhand');
const cnt = document.querySelector('#counthand');

setInterval(() => {
    let d = new Date();
    let secrotation = d.getSeconds() * deg;
    clockhand.style.transform = `rotateZ(${secrotation}deg)`;
    let cntrotation = d.getMinutes() * deg;
    counthand.style.transform = `rotateZ(${cntrotation}deg)`;
}, 1000);
