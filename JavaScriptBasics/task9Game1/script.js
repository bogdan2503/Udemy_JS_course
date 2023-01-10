let secretNumber
let score
function secret () {
  secretNumber = Math.floor(Math.random() * 20) + 1
  score = 19
  return secretNumber, score
}

secret ()
let bestScore

document.querySelector('.check').addEventListener('click', function () {

  if (score > 0) {
    let inputNumber = Number (document.querySelector('.number-input').value);
    console.log (inputNumber);
    
    if (inputNumber > 20 || inputNumber<=0) {
      document.querySelector(".guess-message").textContent = "wrong enter"
      document.querySelector('.number-input').value = ""
      } else {
            if (inputNumber<secretNumber) {
            document.querySelector(".guess-message").textContent = "Not enought"
              document.querySelector(".score").textContent = score--
              document.querySelector('.number-input').value = ""
              if (score < 0) {document.querySelector(".guess-message").textContent = "you LOOSE"}
            } else if (inputNumber>secretNumber ) {
              document.querySelector(".guess-message").textContent = "Too much"
              document.querySelector(".score").textContent = score--
              document.querySelector('.number-input').value = ""
              if (score < 0) {document.querySelector(".guess-message").textContent = "you LOOSE"}
            } else if (inputNumber==secretNumber) {
              document.querySelector(".guess-message").textContent = "You win!";
              document.querySelector(".question").textContent =secretNumber;
              document.querySelector(".highscore").textContent = score + 1;
              document.body.style.backgroundColor = 'rgb(9, 250, 21)';
            }
    }
  } else {console.log ("STOP GAME")}
  bestScore = score + 1
 return bestScore
});

function startAgain () {
    secret ()
    document.querySelector('.number-input').value = ""
    document.body.style.backgroundColor = '#030303'
    document.querySelector(".question").textContent = "???"
    document.querySelector(".guess-message").textContent = "Start again"
    document.querySelector(".score").textContent = 20
    document.querySelector(".highscore").textContent = bestScore
}

document.querySelector('.again').addEventListener('click', startAgain)