let inputs = document.getElementsByClassName("score-tracker")
for (let x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("change", workout_score);
}

/**
 *Works out total score on user input
 */
function workout_score() {
    let score = this.value;
    score = score * score;
    console.log(this.id + score);
}