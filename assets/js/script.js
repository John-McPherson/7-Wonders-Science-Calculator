let inputs = document.getElementsByClassName("score-tracker")
for (let x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("change", workout_total_points);
}

/**
 *Works out score for each indivdual science type based on user input
 */
function workout_indivdual_score() {
    let indivdual_score = 0
    let basic = document.getElementsByClassName("basic")
    for (let x = 0; x < basic.length; x++) {
        let score = basic[x].value * basic[x].value
        indivdual_score += score
    }
    return indivdual_score
}
/**
 * Works out score for sets of science
 */
function workout_set_points() {
    let basic = document.getElementsByClassName("basic")
    let sets = 7;
    for (let x = 0; x < basic.length; x++) {
        if (basic[x].value < sets) {
            sets = basic[x].value
        }
    }
    points = sets * 7;
    return points
}
/**
 * works out total points
 */
function workout_total_points() {
    total_points = workout_set_points() + workout_indivdual_score()
    console.log(total_points)
    update_points(total_points)

}

function update_points(points) {
    score = document.getElementsByTagName("h2")
    score[0].innerHTML = `${points}`
}