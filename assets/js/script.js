let inputs = document.getElementsByClassName("score-tracker")
for (let x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("change", update_variables);
}
var cog = 0;
var compass = 0;
var tablet = 0;
var wild = 0;
/**
 *Works out score for each indivdual science type based on user input
 */
function workout_indivdual_score(x, y, z) {
    let indivdual_score = (x * x) + (y * y) + (z * z);
    return indivdual_score
}
/**
 * Works out score for sets of science
 */
function workout_set_points(x, y, z) {
    if (x < y && z < z) {
        set_points = x * 7;
    } else if (y < x && y < z) {
        set_points = y * 7;
    } else {
        set_points = z * 7;
    }
    return set_points
}
/**
 * works out total points
 */
function workout_total_points() {
    total_points = workout_set_points() + workout_indivdual_score()
    console.log(total_points)
    update_points(total_points)

}
/**
 * updates the DOM with the correct points.
 */
function update_points(points) {
    score = document.getElementsByTagName("h2")
    score[0].innerHTML = `${points}`
}

function update_variables() {
    let scores = document.getElementsByClassName("score-tracker");
    cog = parseInt(scores[0].value);
    compass = parseInt(scores[1].value);
    tablet = parseInt(scores[2].value);
    wild = parseInt(scores[3].value);
    workout_wild()
}

// function workout_wild() {
//     if (cog >= compass && cog >= tablet) {
//         points = ((cog + wild) * cog + wild) + (compass * compass) + (tablet * tablet)
//         console.log("cog" + points)
//     } else if (compass > tablet && compass > cog) {
//         points = ((compass + wild) * compass + wild) + (tablet * tablet) + (cog * cog)
//         console.log("compass" + points)
//     } else if (tablet > compass && tablet > cog) {
//         points = ((tablet + wild) * tablet + wild) + (compass * compass) + (cog * cog)
//         console.log("tablet" + points)
//     }

//     if (cog < compass && cog < tablet) {


//         console.log("cog" + points)
//     } else if (compass < tablet && compass < cog) {

//         console.log("compass" + points)
//     } else if (tablet < compass && tablet < cog) {


//     }
// }