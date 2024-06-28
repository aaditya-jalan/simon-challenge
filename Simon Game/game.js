var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var num = Math.random() * 4;
  num = Math.floor(num);
  var randomChosenColor = buttonColors[num];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  userClickedPattern = [];
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (currentLevel === gamePattern.length - 1) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    playSound("wrong");
    displayScore();
    startOver();
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function displayScore() {
  $("#score").text(level - 1);
  $("#score-title").show();
}

function startOver() {
  started = false;
  gamePattern = [];
  level = 0;
}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).on("keydown", function () {
  if (!started) {
    $("#score-title").hide();
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
