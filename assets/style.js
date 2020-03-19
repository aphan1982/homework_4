var startQuizBtn = document.getElementById("startQuizBtn");

function beginQuiz() {
  var timeSelection = document.getElementsByName("duration");
  // Takes user input from radio buttons, determines length of quiz in minutes and seconds:
  var quizDuration = setTime();
  function setTime() {
    for (i = 0; i < timeSelection.length; i++) {
      if (timeSelection[i].checked) {
        return parseInt((timeSelection[i].value) * 60);
      }
    }
  };
  
  // Initiates and regulates the countdown timer:
  function startClock() {
    // Converts milliseconds to clock format:
    function convertClock(rawTime) {
      var minutes = "0" + Math.floor(rawTime / 60);
      var seconds = "0" + Math.floor(rawTime % 60);
      return minutes.slice(-2) + ":" + seconds.slice(-2);
    };
    // Initiates countdown immediately upon click:
    quizDuration--;
    document.getElementById("timer").innerHTML = convertClock(quizDuration);
    // Continues countdown in 1sec intervals:
    var interval = setInterval(runClock, 1000);
    function runClock() {
      quizDuration--;
      document.getElementById("timer").innerHTML = convertClock(quizDuration);
      // Terminates countdown at zero:
      if (quizDuration === 0) {
        clearInterval(interval);
        alert("Time's up!");
      }
    };
  };
  setTime();
  startClock();
}


startQuizBtn.addEventListener("click", beginQuiz);