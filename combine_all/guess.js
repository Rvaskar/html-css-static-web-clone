document.addEventListener("DOMContentLoaded", function () {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const guessInput = document.getElementById("guess-input");
  const guessButton = document.getElementById("guess-button");
  const resultMessage = document.getElementById("result-message");
  const Showchances = document.getElementById("chances");

  let remainingChances = 8;
  let guessed = false;

  guessButton.addEventListener("click", function () {
    if (!guessed && remainingChances > 0) {
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent =
          "Please enter a valid number between 1 and 100.";
        resultMessage.style.color = "red";
      } else {
        if (userGuess === randomNumber) {
          resultMessage.textContent =
            "Congratulations! You guessed the correct number! 😎";
            resultMessage.style.color = "green";
            guessed = true;
            guessButton.disabled = true;

            //time interval 
            setTimeout(() => {
                
            
            let count = 3;

                const countdown = setInterval(() => {
                if (count > 0) {
                    // console.log(count);
                    resultMessage.textContent = `restart in ${count}`;
                    count--;
                } else {
                    window.location.reload();
                }
                }, 1000);
            }, 2000);

            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);
            
        } else if (userGuess < randomNumber) {
          resultMessage.textContent = "The number is greater. 🤔";
          resultMessage.style.color = "red";
        } else if (userGuess > randomNumber) {
          resultMessage.textContent = "The number is smaller. 🤔";
          resultMessage.style.color = "red";
        }

        remainingChances--;
        Showchances.textContent = remainingChances;
        if (remainingChances === 0 && !guessed) {
          resultMessage.textContent = `Game over! You couldn't guess the number. The correct number was ${randomNumber}.🤭`;
          resultMessage.style.color = "red";
          guessButton.disabled = true;
          //time interval 
            setTimeout(() => {
                
            
            let count = 3;

                const countdown = setInterval(() => {
                if (count > 0) {
                    // console.log(count);
                    resultMessage.textContent = `restart in ${count}`;
                    count--;
                } else {
                    window.location.reload();
                }
                }, 1000);
            }, 2000);

            //end time interval
        }
      }

      let guessrestart = document.getElementById('guess-restart');
      guessrestart.onclick = function(){
        window.location.reload();
        };

      guessInput.value = "";
      guessInput.focus();
    }
  });
});
