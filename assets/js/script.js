let inputs = document.getElementsByClassName("score-tracker")
for (let x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("change", workout_set_points);
}

/**
 *Works out score for each indivdual science type based on user input
 */
function workout_indivdual_score() {
    let score = this.value;
    total_score = score * score;
    console.log(this.id + total_score);
}
/**
 * Works out score for sets of science
 */
function workout_set_points() {
    let sets = 7;
    for (let x = 0; x < inputs.length; x++) {
        if (inputs[x].value < sets) {
            sets = inputs[x].value
            console.log("updating sets..." + sets)
        }

    }
    points = sets * 7;
    return points
}