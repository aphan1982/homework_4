var quizDuration = 4;
var startQuizBtn = document.getElementById("startQuizBtn");
var timeSelection = document.getElementsByName("duration");

function setTime() {
  for (i = 0; i < timeSelection.length; i++) {
    if (timeSelection[i].checked) {
      quizDuration = parseInt(timeSelection[i].value);
    }
  }
  console.log(quizDuration);
}

function startClock() {
  // causes countdown to begin immediately upon click:
  quizDuration--;
  document.getElementById("timer").innerHTML = quizDuration;
  // causes countdown to continue in 1sec intervals:
  var interval = setInterval(runClock, 1000);
  function runClock() {
    quizDuration--;
    document.getElementById("timer").innerHTML = quizDuration;
    if (quizDuration === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
  }
}

startQuizBtn.addEventListener("click", startClock);