let startPage = document.getElementById("start-screen")
let questionPage = document.getElementById("questions")
let endPage = document. getElementById("end-screen")
let startButton = document.getElementById("start")
let timerElement = document.getElementById("time");
let time = questions.length * 15;
let timerID;
let feedbackElement = document.getElementById("feedback");
let scores = 0;


//click start button to start

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startPage.setAttribute("class", "hide");
    questionPage.removeAttribute("class");    
    timerID = setInterval(startTimer, 1000);
    startTimer()
    getQuestion()
} 
  
// The setTimer function starts and stops the timer and triggers endQuiz()

function startTimer() {
//     Sets timer
  time --;
  timerElement.textContent = time;

  if (time<=0){
  endQuiz();
  }
}

//render the first question

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

let sfxRight = new Audio ("assets/sfx/correct.wav");
let sfxWrong = new Audio ("assets/sfx/incorrect.wav");

function selectAnswer () {
  if (this.value !== questions[currentQuestionIndex].answer){
    time -= 15;
    if (time <0){
      time = 0
    }
    
    timerElement.textContent = time;
    feedbackElement.textContent = "Wrong";
    sfxWrong.play();
  } else{
    feedbackElement.textContent = "Correct";
    sfxRight.play();
    scores += 20;
  }

  localStorage.setItem("Final Score", scores)

  feedbackElement.setAttribute("class", "feecback");

  setTimeout(function(){
    feedbackElement.setAttribute("class", "feedback hide")
    }, 1000)

currentQuestionIndex++;

if (currentQuestionIndex === questions.length){
  endQuiz()
}else {
  getQuestion();
}
}

// The endQuiz function is called when the end condition is met
let submitButton = document.getElementById("submit")
let initial = document.getElementById("initials")
let finalScore = document.getElementById("final-score")

function endQuiz() {
  clearInterval(timerID);
  questionPage.classList.remove("start");
  questionPage.classList.add("hide");
  endPage.classList.remove("hide");
  endPage.classList.add("start");

  finalScore.textContent = localStorage.getItem(scores) ;  
  submitButton.addEventListener("click", checkForEnter)
  }

function checkForEnter () {
  localStorage.setItem("Initial", initial)
}
  
