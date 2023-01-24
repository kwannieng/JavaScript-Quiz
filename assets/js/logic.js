//1.
let startPage = document.getElementById("start-screen")
let questionPage = document.getElementById("questions")
let endPage = document. getElementById("end-screen")
let startButton = document.getElementById("start")


//click start button to start

startButton.addEventListener("click", startGame())

function startGame() {

    startPage.classList.remove("start");
    startPage.classList.add("hide");
    questionPage.classList.remove("hide");
    questionPage.classList.add("start");
    

    endQuiz = false;
    timerCount = 1000;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }
  
// The setTimer function starts and stops the timer and triggers endQuiz()
let timerElement = document.getElementById("time")

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {

        if (endQuiz && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          endQuiz();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  // The endQuiz function is called when the end condition is met
let submitButton = document.getElementById("submit")
let initial = document.getElementById("initials")
let finalScore = document.getElementById("final-score")

  function endQuiz() {
    questionPage.classList.remove("start");
    questionPage.classList.add("hide");
    endPage.classList.remove("hide");
    endPage.classList.add("start");



    finalScore = localStorage.getItem("score")    
    submitButton.addEventListener("click", localStorage.setItem("Initial", initial))

    loseCounter++
  }
  
