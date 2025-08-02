let [hours, minutes, seconds] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let timer = null;
let lapsList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStopwatch() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = "";
}

function recordLap() {
  let lapTime = timerDisplay.innerText;
  let li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  lapsList.appendChild(li);
}
