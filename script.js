document.addEventListener("DOMContentLoaded", function () {
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

userInput.forEach(function (button) {
    button.addEventListener("click", function () {
      playerChoice = button.innerHTML;
      pcChoice=Math.floor(Math.random()*3)+1;
      
      displayP.text("Player picked " + playerChoice);
      displayC.text("PC picked " + choicesPc[pcChoice]);
      if(moves==1 && pcScore>userScore){
         alert("pc wins");
      }else if(moves==1 && userScore>pcScore){
        alert("Usser wins");
      }else{
        results();
      }
      let movesRemain=$(".movesLeft");
      moves--;
      movesRemain.text(moves);
    });
  });
  let choicesPc = {
    1: 'ROCK',
    2: 'PAPER',
    3: 'SCISSOR',
  };
  function results(){
    if(playerChoice==choicesPc[pcChoice]){
    output.text("Draw");
    }else if (playerChoice=="ROCK" && choicesPc[pcChoice]=="PAPER"){
        output.text("Computer wins");
        pcScore++;
        pcCounter.text(pcScore);
    }else if (playerChoice=="PAPER" && choicesPc[pcChoice]=="ROCK"){
        output.text("User wins");
        userScore++;
        userCounter.text(userScore);
    }else if(playerChoice=="SCISSOR" && choicesPc[pcChoice]=="ROCK"){
        output.text("Computer wins");
        pcScore++;
        pcCounter.text(pcScore);
    }else if(playerChoice=="SCISSOR" && choicesPc[pcChoice]=="PAPER"){
        output.text("User wins");
        userScore++;
        userCounter.text(userScore);
    }else if(playerChoice=="ROCK" && choicesPc[pcChoice]=="SCISSOR"){
        output.text("User wins");
        userScore++;
        userCounter.text(userScore);
    }else if(playerChoice=="PAPER" && choicesPc[pcChoice]=="SCISSOR"){
        output.text("Computer wins");
        pcScore++;
        pcCounter.text(pcScore);
    }
  }

  
}); 

let reloadBtn = $(".reload");
reloadBtn.on("click", function () {
  location.reload();
});