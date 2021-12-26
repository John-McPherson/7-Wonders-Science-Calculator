let inputs = document.getElementsByClassName("score-tracker")
for (let x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("change", workout_total_points);
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
    if (x <= y && x <= z && x > 0) {
        set_points = x * 7;
    } else if (y < x && y <= z) {
        set_points = y * 7;
    } else if (z < x && z < y) {
        set_points = z * 7;
    } else {
        set_points = 0;
    }
    return set_points
}
/**
 * works out total points
 */
function workout_total_points() {
    update_variables()
    workout_wild()
    total_points = workout_set_points(cog, compass, tablet) + workout_indivdual_score(cog, compass, tablet)
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

}

function workout_wild() {
    let cog_wild = 0;
    let compass_wild = 0;
    let tablet_wild = 0;

    for (let x = 1; x <= wild; x++) {
        cog_wild = workout_set_points(cog + 1, compass, tablet) + workout_indivdual_score(cog + 1, compass, tablet)
        compass_wild = workout_set_points(cog, compass + 1, tablet) + workout_indivdual_score(cog, compass + 1, tablet)
        tablet_wild = workout_set_points(cog, compass, tablet + 1) + workout_indivdual_score(cog, compass, tablet + 1)
        if (cog_wild > compass_wild && cog_wild > tablet_wild) {
            cog++
        } else if (compass_wild > cog_wild && compass_wild > tablet_wild) {
            compass++
        } else {
            tablet++
        }

    }
}