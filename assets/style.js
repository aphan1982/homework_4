// **GENERAL FLOW/OPERATION**
// The user is asked to select between three durations for the quiz. When "Start Quiz" is clicked, a multiple-choice queston will be randomly selected from the matrix of available questions. The truthiness of the corresponding answer choices is evaluated

// QUIZ QUESTION REPOSITORY, each formed as an array with five multiple-choice elements: indices[0-4] containing potential answers and index[5] the actual question, generated above in an <h1> element:
var quest1 = [[".log()", false], [".splice()", true],[".moveTo()", false],["All of the above", false],["None of the above", false], "What method can be used to remove one or more items from an array?"];

var quest2 = [["Add elements such as <p> or <li>", false], ["Listen for events to trigger behavior", false],["Update text content", false],["All of the above", true],["None of the above", false], "Which of the following can JavaScript do dynamically?"];

var quest3 = [["Able to withstand cyber attacks", false], ["Able to be changed through methods, functions, and variables", true],["Able to enhance Search Engine Optimization", false],["All of the above", false],["None of the above", false], "\"Dynamic\" means what in the context of JavaScript?"];

var quest4 = [["Brendan Eich", true], ["Yukihiro Matsumoto", false],["Chris Beard", false],["Tim Berners-Lee", false],["James Gosling", false], "Who developed JavaScript?"];

var quest5 = [["Brackets: [ ]", false], ["Question marks: ¿ ?", false],["Angle brackets: < >", false],["Double periods: .. ..", false],["None of the above", true], "What special characters are used to indicate a JavaScript function?"];

var quest6 = [["Eliminates whitespace from code before a page is loaded", false], ["A factor that can determine how many times a function is executed", true],["A command that displays information the DOM", false],["All of the above", false],["None of the above", false], "An \"iterator\" is something that does what?"];

var quest7 = [["Putting a variable at the top of its scope regardless if it's been declared yet", true], ["Placing the variable higher in relation to other variables", false],["Stealing from another developer without giving proper credit", false],["Declaring a variable before the <head> section in HTML", false],["None of the above", false], "\"Hoisting\" a variable means what?"];

var quest8 = [["Direct Onboard Matriculation", false], ["Dynamic Output Manipulation", false],["Document Object Model", true],["Dumb Old Macintosh", false],["Data-Organized Material", false], "DOM stands for what?"];

var quest9 = [["var rock = musicTypes.popular[0];", false], ["if (newRock >+ oldRock)...", true],["document.body.appendChild(t);", false],["console.log(newRock);", false],["for (var i = 0; i < rock.length; i++)...", false], "What is <em> not </em> an example of acceptable JavaScript syntax?"];

var quest10 = [["return", false], ["debugger", false],["switch", false],["All of the above", true],["None of the above", false], "Which of the following words <em> cannot </em> be used as a variable, label, or function name in JavaScript?"];

// QUESTION REPOSITORY MATRIX, combined so as to allow for random selection by the computer:
var questMatrix = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];

// VARIABLES
var answerOptions;
var interval;
var numOfQuestCalled = 0;
var numOfQuestions;
var questSelect;
var questSelectRecord = [];
var quizDuration;
var resetBtn;
var scoreRegistry = 0;
var startBtnClicked = false;
$("#scoreRegistry").text("Score: " + scoreRegistry);

// FUNCTIONS 
function abortQuiz() {
  clearInterval(interval);
  numOfQuestCalled = 0;
  alert("You've chosen to stop!");
  $("#startQuizBtn").html("&#9940;  &#9888;&#65039;  &#9940;");
  $("#startQuizBtn").off("click");
};

// Evalutes the truthiness of answers selected in multiple-choice.
function answerQuest() {
  numOfQuestCalled++;
  var btnSelected = $(this);
  if (numOfQuestCalled < questMatrix.length) {
    if (btnSelected.hasClass("true")) {
      alert("Yay!");
      scoreRegistry = scoreRegistry + 100;
      $("#scoreRegistry").text("Score: " + scoreRegistry);
      $("#answerField").empty();
      if (numOfQuestCalled < questMatrix.length) {
        genQuestion();
      };
      } else if (!btnSelected.hasClass("true")) {
      alert("BOOO!!!");
      $("#answerField").empty();
      // This is what I'd like to use to subtract time from timer, but I can't get it to work:
      // quizDuration - 10;
      genQuestion();
    };
  } else {
    completeQuiz();
  };
};

// This displays the potential answers to every multiple-choice question:
function appendAns() {
  for (var i = 0; i < 5; i++) {
    answerOptions = $("<button type='button' class='btn btn-primary btn-lg btn-block'></button>");
    answerOptions.text(questMatrix[questSelect][i][0]);
    if (questMatrix[questSelect][i][1] === true) {
      answerOptions.addClass("true");
    };
    $("#answerField").append(answerOptions);
    var btnIDs = $(".btn");
    btnIDs[i].id = "btn" + i;
  };
};

// Sequence of what happens when quiz is started:
function buttonCycle() {
  if (!startBtnClicked) {
    startBtnClicked = true;
    $("#startQuizBtn").html("&#128308;  Stop Quiz");
    setTime();
    startClock();
    genQuestion();
    numOfQuestCalled++;
  } else {
    abortQuiz();
    genResetBtn();
  };
};

// Sequence when quiz is completed:
function completeQuiz() {
  clearInterval(interval);
  numOfQuestCalled = 0;
  alert("Congratulations, you've finished!");
  if (scoreRegistry > 0) {
    setHighScore();
  };
  $("#startQuizBtn").html("&#127775;  &#127881;  &#127775;");
  $("#startQuizBtn").off("click");
  resetBtn = $("<button type='button' class='btn btn-danger' id='resetBtn'>&#128260;  Reset</button>");
  $("#btnContainer").append(resetBtn);
  $(".btn-danger").on("click", resetQuiz());
};

// Randomly selects question from those available:
function genQuestion() {
  // Displays question as header:
  console.log(questMatrix.length);
  if (numOfQuestCalled <= questMatrix.length) {
    getQuestIndex();
    if (questSelectRecord.includes(questSelect)) {
      while (questSelectRecord.includes(questSelect)) {
        getQuestIndex();
        if (questSelectRecord.includes(!questSelect)) {
          break;
        };
      };
    };
    questSelectRecord.push(questSelect);
    var questTitle = $("<h1 id='questHeading'></h1>");
    questTitle.html(questMatrix[questSelect][5]);
    $("#answerField").append(questTitle);
    // Lists potential answers, evaluates the truthiness of each, displays on the DOM, and assigns a unique button ID:
    appendAns();
    $(".btn").on("click", answerQuest);
    console.log(numOfQuestCalled);
  } else {
    completeQuiz();
  };
};

// When user aborts quiz, generates button to reset:
function genResetBtn() {
  resetBtn = $("<button type='button' class='btn btn-danger' id='resetBtn'>&#128260;  Reset</button>");
  $("#btnContainer").append(resetBtn);
  $(".btn-danger").on("click", resetQuiz);
};

// Function to randomly select quiz question:
function getQuestIndex() {
  questSelect = Math.floor(Math.random() * questMatrix.length);
};

// To clear DOM for new quiz:
function resetQuiz() {
  $("#timer").text("00:00");
  scoreRegistry = 0;
  $("#scoreRegistry").text("Score: " + scoreRegistry);
  $("#answerField").empty();
  startBtnClicked = false;
  $("#startQuizBtn").html("&#128994;  Start Quiz");
  $("#startQuizBtn").on("click", buttonCycle);
  $("#resetBtn").remove();
  numOfQuestCalled = 1;
};

// To put high scores in local storage and display on DOM:
function setHighScore() {
  var highScoreName = prompt("You've made the high score! Please enter your name for everlasting remembrance:");
  if (highScoreName === "") {
    alert("Please enter valid name!");
    setHighScore();
  } else {
    var highScoreEntry = {
      name: highScoreName,
      score: scoreRegistry,
    };
    console.log(highScoreEntry);
    var record = [];
    record = JSON.parse(localStorage.getItem("quiz")) || [];
    record.push(highScoreEntry);
    console.log(record);
    localStorage.setItem("quiz", JSON.stringify(record));
  };
};

// Sets the countdown clock based on user preference:
function setTime() {
  var timeSelection = $("[name='duration']");
  for (var i = 0; i < timeSelection.length; i++) {
    if (timeSelection[i].checked) {
      quizDuration = parseInt((timeSelection[i].value) * 60);
    };
  };
  numOfQuestions = Math.floor(quizDuration / 25);
};

// Starts timer:
function startClock() {
  // Converts milliseconds to clock format:
  function convertClock(rawTime) {
    var minutes = "0" + Math.floor(rawTime / 60);
    var seconds = "0" + Math.floor(rawTime % 60);
    return minutes.slice(-2) + ":" + seconds.slice(-2);
  };
  // Initiates countdown immediately upon click:
  quizDuration--;
  $("#timer").text(convertClock(quizDuration));
  // Continues countdown in 1sec intervals:
  interval = setInterval(runClock, 1000);
  function runClock() {
    quizDuration--;
    $("#timer").text(convertClock(quizDuration));
    // Terminates countdown at zero:
    if (quizDuration === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
  };
};

$("#startQuizBtn").on("click", buttonCycle);