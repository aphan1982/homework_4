var quest1 = [[".log()", false], [".splice()", true],[".moveTo()", false],["All of the above", false],["None of the above", false], "What method can be used to remove one or more items from an array?"];

var quest2 = [["Add elements such as <p> or <li>", false], ["Listen for events to trigger behavior", false],["Update text content", false],["All of the above", true],["None of the above", false], "Which of the following can JavaScript do dynamically?"];

var quest3 = [["Able to withstand cyber attacks", false], ["Able to be changed through methods, functions, and variables", true],["Able to enhance Search Engine Optimization", false],["All of the above", false],["None of the above", false], "\"Dynamic\" means what in the context of JavaScript?"];

var quest4 = [["Brendan Eich", true], ["Yukihiro Matsumoto", false],["Chris Beard", false],["Tim Berners-Lee", false],["James Gosling", false], "Who developed JavaScript?"];

var quest5 = [["Brackets: [ ]", false], ["Question marks: ¿ ?", false],["Angle brackets: < >", false],["Double periods: .. ..", false],["None of the above", true], "What special characters are used to indicate a JavaScript function?"];

var quest6 = [["Eliminates whitespace from code before a page is loaded", false], ["A factor that can determine how many times a function is executed", true],["A command that displays information the DOM", false],["All of the above", false],["None of the above", false], "An \"iterator\" is something that does what?"];

var quest7 = [["Putting a variable at the top of its scope regardless if it's been declared yet", true], ["Placing the variable higher in relation to other variables", false],["Stealing from another developer without giving proper credit", false],["Declaring a variable before the <head> section in HTML", false],["None of the above", false], "\"Hoisting\" a variable means what?"];

var quest8 = [["Direct Onboard Matriculation", false], ["Dynamic Output Manipulation", false],["Document Object Model", true],["Dumb Old Macintosh", false],["Data-Organized Material", false], "DOM stands for what?"];

var quest9 = [["var rock = musicTypes.popular[0];", false], ["if (newRock >+ oldRock)...", true],["document.body.appendChild(t);", false],["console.log(newRock);", false],["for (var i = 0; i < rock.length; i++)...", false], "What is NOT an example of acceptable JavaScript syntax?"];

var quest10 = [["return", false], ["debugger", false],["switch", false],["All of the above", true],["None of the above", false], "Which of the following words CANNOT be used as a variable, label, or function name in JavaScript?"];

var questMatrix = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];

var interval;

function beginQuiz() {
  // Takes user input from radio buttons, determines length of quiz in minutes and seconds:
  var timeSelection = $("[name='duration']");
  var quizDuration = setTime();
  function setTime() {
    for (var i = 0; i < timeSelection.length; i++) {
      if (timeSelection[i].checked) {
        return parseInt((timeSelection[i].value) * 60);
      }
    }
  };
  
  // The number of questions is derivative of the length of quiz:
  // var numOfQuestions = Math.floor(quizDuration / 30);
  
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
  setTime();
  startClock();
};

var questSelectRecord = [];


// Randomly selects quiz questions and displays them:
function genQuestion() {
  // Displays question as header:
  var questSelect;
  function setQuestNum() {
    questSelect = Math.floor(Math.random() * questMatrix.length);
  };
  setQuestNum();
  if (questSelectRecord.includes(questSelect)) {
    setQuestNum();
  } else {
    questSelectRecord.push(questSelect);
    var questTitle = $("<h1 id='questHeading'></h1>");
    questTitle.text(questMatrix[questSelect][5]);
    $("#answerField").append(questTitle);
    // Lists potential answers, evaluates the truthiness of each, displays on the DOM, and assigns a unique button ID:
    for (var i = 0; i < 5; i++) {
      var answerOptions = $("<button type='button' class='btn btn-primary btn-lg btn-block'></button>");
      answerOptions.text(questMatrix[questSelect][i][0]);
      if (questMatrix[questSelect][i][1] === true) {
        answerOptions.addClass("true");
      };
      $("#answerField").append(answerOptions);
      var btnIDs = $(".btn");
      btnIDs[i].id = "btn" + i;
    };
    $(".btn").click(function() {
      var btnSelected = $(this);
      if (btnSelected.hasClass("true")) {
        alert("Yay!");
      } else if (!btnSelected.hasClass("true")) {
        alert("BOOO!!!");
      };
    });
    // document.querySelectorAll(".btn").classList.add((questMatrix[questSelect][i][1]).value);
  };
  // for (var i = 0; i < btnIDs.length; i++) {
  // };

  var btnsToCheck = $(".btn-primary");
  var checker = function(event) {
    event.preventDefault();
    if (btnsToCheck.hasClass("true")) {
      alert("Yay!");
    } else {
      alert("WRONG!!!");
    };
  for (var i = 0; i < btnsToCheck.length; i++) {
    btnsToCheck[i].on("click", checker);
  };
  }
}
//   .on("click", function(event) {
//     event.preventDefault();
//     var btnCheck = $(".btn-primary");
//     for (var i = 0; i < btnCheck.length; i++) {
//       if (btnCheck.hasClass("true")) {
//         alert("Yay!");
//       } else {
//         alert("WRONG!!!");


//         var btnCheck = $(".btn-primary");

// var checker = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }


//       };
//     }
//   });
// };


var startBtnClicked = false;
$("#startQuizBtn").on("click", function(event) {
  event.preventDefault();
  if (!startBtnClicked) {
    startBtnClicked = true;
    $("#startQuizBtn").text("End Quiz");
    beginQuiz();
    genQuestion();
  } else {
    clearInterval(interval);
    alert("You've chosen to stop!");
    var resetBtn = $("<button type='button' class='btn btn-danger'>Reset</button>");
    $("#btnContainer").append(resetBtn);
    $(".btn-danger").on("click", function(event) {
      event.preventDefault();
      $("#timer").text("00:00");
    });
  };
});

// genQuestion();



// RESOURCES/POTENTIAL CODE:
// var answerSequence;
// var orderedList;

// var quest1 = [["Red", true], ["Green", false],["Purple", false],["All of the Above", false],["None of the Above", false], "What color is Anthony's favorite?"];

// var testNums = [ { name: 0, isTrue: true }, { name: 1, isTrue: false }, { name: 2, isTrue: false }, { name: 3, isTrue: false }, { name: 4, isTrue: false }];

// var thingItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < 5; i++) {
//   var newThing = $("<li class='questLI'>");
//   newThing.text("This is an example of question #" + thingItems[i]);
//   $("#questOL").append(newThing);
// };

// for (var i = 0; i < 4; i++) {
// var newDiv = $("<div>");
// newDiv.text("A pleasure to meet you, " + testNums[i].name + "!");
// $("#empty-div").append(newDiv);
// newDiv.attr("class", "fancy");
// };

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
//   for (var i = 0; i < 5; i++) {
//     console.log(question1[answerSequence[i]][0]);
//   }
// };

// SHUFFLERS:
// function shuffle4(arr) {
//   var newSpot;
//   var placeholderSpot;
//   for (var i = 3; i > 0; i--) {
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
//   for (var i = 4; i > 0; i--) {
//     newSpot = Math.floor(Math.random() * (i + 1));
//     placeholderSpot = arr[i];
//     arr[i] = arr[newSpot];
//     arr[newSpot] = placeholderSpot;
//   }
//   return arr;
// };


// SAMPLE QUESTION SET:
// var quest1 = [ { name: "red", isTrue: false }, { name: "orange", isTrue: false }, { name: "green", isTrue: false }, { name: "blue", isTrue: true }, { name: "all of the above", isTrue: false } ];