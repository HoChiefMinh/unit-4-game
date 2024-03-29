$(document).ready(function() {

  // process for game loop
    var winCount = 0; // counter for game wins
    $("#wScore").text("Wins: " + winCount);
    var lossCount = 0; // counter for game losses
    $("#lScore").text("Losses: " + lossCount);
    var userScore = 0; // counter for user score
    var gameScore = Math.floor(Math.random() * 102) + 19; // creates game score, a random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
    $("#gScore").text("Game Score: " + gameScore);
    $("#uScore").text("User Score: " + userScore);
    console.log(gameScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

  // resets the values of the game
  function resetGame() {
    userScore = 0;
    gameScore = Math.floor(Math.random() * 102) + 19; // creates game score, a random number between 19-120
    crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
    $("#gScore").text("Game Score: " + gameScore);
    $("#uScore").text("User Score: " + userScore);
    console.log(gameScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
  }

  // creates function for a game win
  function winGame() {
    alert("You're pretty good at this!");
    winCount = winCount + 1;
    $("#wScore").text("Wins: " + winCount);
    resetGame();
  }

  // creates function for a game loss
  function loseGame() {
    alert("You're bad, just give up!");
    lossCount = lossCount + 1;
    $("#lScore").text("Losses: " + lossCount);
    resetGame();
  }

  // creates on click function for crystalOne
  
      $("#crystal1").click(function() {
        userScore = userScore + crystalOne; // adds value of crystalOne to userScore
        console.log("User Score: " + userScore);
          $("#uScore").text("User Score: " + userScore);
          if (userScore === gameScore) {
            winGame();
          } else if (userScore > gameScore) {
            loseGame();
          }
      });
  // creates on click function for crystalTwo
  $("#crystal2").click(function() {
    userScore = userScore + crystalTwo; // adds value of crystalTwo to userScore
    console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

  // creates on click function for crystalThree
  $("#crystal3").click(function() {
    userScore = userScore + crystalThree; // adds value of crystalThree to userScore
    console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

  // creates on click function for crystalFour
  $("#crystal4").click(function() {
    userScore = userScore + crystalFour; // adds value of crystalFour to userScore
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

});