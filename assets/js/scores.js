let scoreValue = localStorage.getItem("Final Score")
let initial = localStorage.getItem("Initial")

let score = document.createElement("li");


score.innerText = `${initial} - ${scoreValue}`;
document.getElementById("highscores").appendChild(score)


let button = document.getElementById("clear")
button.addEventListener("click", clearScore)
function clearScore() {
    score.style.display = "none";
}


