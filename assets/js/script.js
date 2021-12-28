let plus = document.getElementsByClassName("plus")
for (let x = 0; x < plus.length; x++) {
    plus[x].addEventListener("click", increment_score);
}
let minus = document.getElementsByClassName("minus")
for (let x = 0; x < minus.length; x++) {
    minus[x].addEventListener("click", decrease_score);
}
var cog = 0;
var compass = 0;
var tablet = 0;
var wild = 0;
var cog_wild = 0;
var compass_wild = 0;
var tablet_wild = 0;

/**
 * increments score when plus button is pressed
 */
function increment_score() {
    if (this.id === "cog-plus") {
        cog++
    } else if (this.id === "compass-plus") {
        compass++
    } else if (this.id === "tablet-plus") {
        tablet++
    } else {
        wild++
    }
    update_science_count()
}
/**
 * decreases score when minus button is pressed
 */
function decrease_score() {
    if (this.id === "cog-minus") {
        if (cog > 0) {
            cog--
        }
    } else if (this.id === "compass-minus") {
        if (compass > 0) {
            compass--
        }
    } else if (this.id === "tablet-minus") {
        if (tablet > 0) {
            tablet--
        }
    } else {
        if (wild > 0) {
            wild--
        }
    }
    update_science_count()
}
/**
 * updates the count of science whenever a button is pressed.
 */
function update_science_count() {
    let cog_score = document.getElementById("cog-score");
    cog_score.innerHTML = `${cog}`
    let compass_score = document.getElementById("compass-score");
    compass_score.innerHTML = `${compass}`
    let tablet_score = document.getElementById("tablet-score");
    tablet_score.innerHTML = `${tablet}`
    let wild_score = document.getElementById("wild-score");
    wild_score.innerHTML = `${wild}`
    workout_total_points()
}
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
/**
 * works out best option for wild science cards
 */
function workout_wild() {
    let cog_wild_total = 0;
    let compass_wild_total = 0;
    let tablet_wild_total = 0;

    for (let x = 1; x <= wild; x++) {
        cog_wild_total = workout_set_points(cog + cog_wild + 1, compass + compass_wild, tablet + tablet_wild) + workout_indivdual_score(cog + cog_wild + 1, compass, tablet + tablet_wild)
        compass_wild_total = workout_set_points(cog + cog_wild, compass + compass_wild + 1, tablet) + workout_indivdual_score(cog + cog_wild, compass + compass_wild + 1, tablet + tablet_wild)
        tablet_wild_total = workout_set_points(cog + cog_wild, compass + compass_wild, tablet + 1) + workout_indivdual_score(cog + cog_wild, compass + compass_wild, tablet + tablet_wild + 1)
        if (cog_wild_total > compass_wild_total && cog_wild_total > tablet_wild_total) {
            cog_wild++
        } else if (compass_wild_total > cog_wild_total && compass_wild_total > tablet_wild_total) {
            compass_wild++
        } else {
            tablet_wild++
        }

    }
}