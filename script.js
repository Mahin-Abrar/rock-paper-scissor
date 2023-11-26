document.addEventListener("DOMContentLoaded", function () {    ///variable declaration
let userInput = document.querySelectorAll(".userButton");
let playerChoice = document.getElementById("playerChoice");
let output= $(".result");
let userCounter=$(".counterPlayer");
let pcCounter=$('.counterPc')
let pcScore=0;
let userScore=0;
let pcChoice=0;
let moves=10;
let displayP=$(".playerC");
let displayC=$(".pcC");

/// function to trigger the random selection of the pc and count the moves
 
userInput.forEach(function (button) {
    button.addEventListener("click", function () {
      playerChoice = button.innerHTML;
      pcChoice=Math.floor(Math.random()*3)+1;
      displayP.text("Player picked " + playerChoice);
      displayC.text("PC picked " + choicesPc[pcChoice]);
      if(moves==0 && pcScore>userScore){
         alert("pc wins");
      }else if(moves==0 && userScore>pcScore){
        alert("User wins");
      }else if(moves==0 && userScore==pcScore){
        alert("Draw");
      }else{
        results();
      }
      let movesRemain=$(".movesLeft");
      if (moves>0){
        moves--;
      movesRemain.text(moves);
      }
    });
  });

  //choices for the pc
  let choicesPc = {
    1: 'ROCK',
    2: 'PAPER',
    3: 'SCISSOR',
  };

  //function for the output  and iteration of the score
  function results(){
    if(playerChoice==choicesPc[pcChoice]){
    output.html("<hr>"+"Draw");
    }else if (playerChoice=="ROCK" && choicesPc[pcChoice]=="PAPER"){
        output.html("<hr>"+"Computer wins");
        pcScore++;
        pcCounter.html(pcScore);
    }else if (playerChoice=="PAPER" && choicesPc[pcChoice]=="ROCK"){
        output.html("<hr>"+"User wins");
        userScore++;
        userCounter.html(userScore);
    }else if(playerChoice=="SCISSOR" && choicesPc[pcChoice]=="ROCK"){
        output.html("<hr>"+"Computer wins");
        pcScore++;
        pcCounter.html(pcScore);
    }else if(playerChoice=="SCISSOR" && choicesPc[pcChoice]=="PAPER"){
        output.html("<hr>"+"User wins");
        userScore++;
        userCounter.html(userScore);
    }else if(playerChoice=="ROCK" && choicesPc[pcChoice]=="SCISSOR"){
        output.html("<hr>"+"User wins");
        userScore++;
        userCounter.html(userScore);
    }else if(playerChoice=="PAPER" && choicesPc[pcChoice]=="SCISSOR"){
        output.html("<hr>"+"Computer wins");
        pcScore++;
        pcCounter.html(pcScore);
    }
  }

  
}); 


//reload button functionality

let reloadBtn = $(".reload");
reloadBtn.on("click", function() {
  location.reload();
});