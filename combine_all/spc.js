function selectChoice(userChoice) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Determine the winner
    let resultText = "";
    if (userChoice === computerChoice) {
      resultText = "It's a tie!";
    } else if (
      (userChoice === "stone" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "stone") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      resultText = "You win!";
    } else {
      resultText = "Computer wins!";
    }

    // console.log(computerChoice)
    // Update the result text
    const resultElement = document.getElementById("result-text");
    resultElement.textContent = resultText;
  
    const resultEC = document.getElementById("cc");
    resultEC.textContent = computerChoice;
  }
  

 function resetGame(){
    location.reload();
    };
    

