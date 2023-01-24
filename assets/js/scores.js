let scoreValue = localStorage.getItem("score")

let score = document.createElement("p");
score.innerText = scoreValue;
document.getElementById("highscores").appendChild(score)


let button = document.getElementById("clear")
button.addEventListener("click", clearScore)
function clearScore() {
    score.style.display = "none";
}


