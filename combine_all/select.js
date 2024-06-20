//creating Empty array to store a number
let array = [];

// Function to generate a random number between 1 and 10 (without repetition)
function generateRandomNum() {
  let randomNumber1;
  do {
    randomNumber1 = Math.floor(Math.random() * 10) + 1;
  } while (array.includes(randomNumber1)); // Repeat until a unique number is generated
  array.push(randomNumber1); // Add the generated number to the set
  return randomNumber1;
}

//checking array are created or not

// console.log(array)

generateRandomNum();

// Update the content of the cards with random numbers
function updateCardNum() {
  for (let i = 1; i <= 5; i++) {
    const card = document.getElementById(`btn${i}`);
    const randomNumber1 = generateRandomNum();
    card.textContent = randomNumber1;
  }
}

let randomNumSelected = Math.floor(Math.random() * 10) + 1;
if (randomNumSelected > 0 || randomNumber1 < 6) {
  // Call the function to update the card numbers when the page loads
  updateCardNum();
}

let randomNumSelected3 = Math.floor(Math.random() * 5) + 1;

let arraynum = array[randomNumSelected3];
console.log("randomnum : ", randomNumSelected3);

let resultMessage1 = document.getElementById("resultMessage1");

let allBtn = document.getElementById("number-auto");
allBtn.textContent = arraynum;
console.log(array);

function showNumber(event, className) {

  event.target.classList.toggle("button2");
  let compnum = event.target.textContent;

  if (compnum == arraynum) {
    // console.log('win')
    resultMessage1.textContent = `You Win 😎`;
    // countDown()
  } else {
    // console.log('loose')
    resultMessage1.textContent = `You Loose 🤔`;
    // countDown()
  }

  for (let i = 1; i <= 5; i++) {
    const card = document.getElementById(`btn${i}`);
    card.disabled = true;
  }

  let resultMessage = document.getElementById("resultMessage");

  setTimeout(() => {
    let count2 = 4;

    setInterval(() => {
      if (count2 > 0) {
        resultMessage.textContent = `restart in ${count2}`;
        console.log(`restart in ${count2}`);
        count2--;
      } else {
        window.location.reload();
      }
    }, 1000);
  }, 4000);
}
