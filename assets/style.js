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
  
  // The number of questions is derivative of the length of quiz:
  // var numOfQuestions = Math.floor(quizDuration / 30);
  
  // function generateQuestion() {
  //   var usedQuestions = [];
  //   function selQuestions() {
  //     for (i = 0; i > numOfQuestions; i++) {
  //       usedQuestions[i] = Math.floor(Math.random() * );
  //     }
  //     return usedQuestions;
  //   }
  // };
  
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



// RESOURCES/POTENTIAL CODE:
// var answerSequence;
// var orderedList;

// var question1 = [["Red", true], ["Green", false],["Purple", false],["All of the Above", false],["None of the Above", false], "What color is Anthony's favorite?"];

// BETTER RANDOMIZER:
// Randomizes the order of answer options, but only the first three, so as to maintain options 4 & 5 as "All/None of the Above", respectively:
// function randomizeAnswers() {
//   var numPool = [0, 1, 2];
//   var index0 = Math.floor(Math.random() * 3);
//   numPool.splice(index0, 1);
//   var index1 = parseInt(numPool.splice(Math.floor(Math.random() * 2), 1));
//   var index2 = numPool[0];
//   answerSequence = [index0, index1, index2, 3, 4];
// };

// randomizeAnswers();


// function formQuestion() {
//   for (i = 0; i < 5; i++) {
//     console.log(question1[answerSequence[i]][0]);
//   }
// };

// SHUFFLERS:
// function shuffle4(arr) {
//   var newSpot;
//   var placeholderSpot;
//   for (i = 3; i > 0; i--) {
//     newSpot = Math.floor(Math.random() * (i + 1));
//     placeholderSpot = arr[i];
//     arr[i] = arr[newSpot];
//     arr[newSpot] = placeholderSpot;
//   }
//   return arr;
// };

// function shuffle5(arr) {
//   var newSpot;
//   var placeholderSpot;
//   for (i = 4; i > 0; i--) {
//     newSpot = Math.floor(Math.random() * (i + 1));
//     placeholderSpot = arr[i];
//     arr[i] = arr[newSpot];
//     arr[newSpot] = placeholderSpot;
//   }
//   return arr;
// };


// SAMPLE QUESTION SET:
// var question1 = [ { name: "red", isTrue: false }, { name: "orange", isTrue: false }, { name: "green", isTrue: false }, { name: "blue", isTrue: true }, { name: "all of the above", isTrue: false } ];