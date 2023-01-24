//1.
let startPage = document.getElementById("start-screen")
let questionPage = document.getElementById("questions")
let endPage = document. getElementById("end-screen")
let startButton = document.getElementById("start")
let timerElement = document.getElementById("time");
let time = questions.length * 15;
let timeID;


//click start button to start

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startPage.setAttribute("class", "hide");
    questionPage.removeAttribute("class");    
    time = setInterval(startTimer, 1000);
    startTimer()
    getQuestion()
} 
  
// The setTimer function starts and stops the timer and triggers endQuiz()

function startTimer() {
//     Sets timer
  time--;
  timerElement.textContent = time;

  // if (time<=0){
  //   endQuiz();
  // }
}
//       if (timeID >= 0) {

//         if (endQuiz && timeID > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           endQuiz();
//         }
//       }
//       // Tests if time has run out
//       if (timeID === 0) {
//         // Clears interval
//         clearInterval(timer);
//         endQuiz();
//       }
//     }, 1000);
//   }

let titleElement = document.getElementById("question-title")
let choicesElement = document.getElementById("choices")
let currentQuestionIndex = 0;


  function getQuestion () {
  
    let currentQuestion = questions[currentQuestionIndex];

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choices, index){
      let choicesButton = document.createElement("button");
      choicesButton.setAttribute("class", "choice");
      choicesButton.setAttribute("value", choices);
      
      choicesButton.textContent = `${choices}`

      choicesButton.addEventListener("click", selectAnswer)

      choicesElement.append(choicesButton);
    })
  }


  function selectAnswer (){

  }

  // The endQuiz function is called when the end condition is met
let submitButton = document.getElementById("submit")
let initial = document.getElementById("initials")
let finalScore = document.getElementById("final-score")

  function endQuiz() {
    clearInterval(timeID);
    questionPage.classList.remove("start");
    questionPage.classList.add("hide");
    endPage.classList.remove("hide");
    endPage.classList.add("start");

    finalScore.textContent = time;



    finalScore = localStorage.getItem("score")    
    submitButton.addEventListener("click", localStorage.setItem("Initial", initial))

    loseCounter++
  }
  
