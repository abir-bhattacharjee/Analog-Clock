const tickSound = new Audio("clock-tick.mp3");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
  const d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();

  const hrotation = 30 * htime + mtime / 2;
  const mrotation = 6 * mtime;
  const srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

  tickSound.currentTime = 0;
  tickSound.play();
}, 1000);
