let plus = document.getElementsByClassName("plus");
for (let x = 0; x < plus.length; x++) {
    plus[x].addEventListener("click", increment_score);
}
let minus = document.getElementsByClassName("minus");
for (let x = 0; x < minus.length; x++) {
    minus[x].addEventListener("click", decrease_score);
}
let clear = document.getElementsByClassName("clear");
for (let x = 0; x < clear.length; x++) {
    clear[x].addEventListener("click", clear_scores);
}
var cog = 0;
var compass = 0;
var tablet = 0;
var wild = 0;
var cog_wild = 0;
var compass_wild = 0;
var tablet_wild = 0;

function clear_scores() {
    cog = 0;
    compass = 0;
    tablet = 0;
    wild = 0;
    update_science_count();

}

/**
 * increments score when plus button is pressed
 */
function increment_score() {
    if (this.id === "cog-plus") {
        cog++;
    } else if (this.id === "compass-plus") {
        compass++;
    } else if (this.id === "tablet-plus") {
        tablet++;
    } else {
        wild++;
    }
    update_science_count();
}
/**
 * decreases score when minus button is pressed
 */
function decrease_score() {
    if (this.id === "cog-minus") {
        if (cog > 0) {
            cog--;
        }
    } else if (this.id === "compass-minus") {
        if (compass > 0) {
            compass--;
        }
    } else if (this.id === "tablet-minus") {
        if (tablet > 0) {
            tablet--;
        }
    } else {
        if (wild > 0) {
            wild--;
        }
    }
    update_science_count();
}
/**
 * updates the count of science whenever a button is pressed.
 */
function update_science_count() {
    let cog_score = document.getElementById("cog-score");
    cog_score.innerHTML = `${cog}`;
    let compass_score = document.getElementById("compass-score");
    compass_score.innerHTML = `${compass}`;
    let tablet_score = document.getElementById("tablet-score");
    tablet_score.innerHTML = `${tablet}`;
    let wild_score = document.getElementById("wild-score");
    wild_score.innerHTML = `${wild}`;
    workout_total_points();
}
/**
 *Works out score for each indivdual science type based on user input
 */
function workout_indivdual_score(x, y, z) {
    let indivdual_score = (x * x) + (y * y) + (z * z);
    return indivdual_score;
}
/**
 * Works out score for sets of science
 */
function workout_set_points(x, y, z) {
    let set_points = 0;
    if (x <= y && x <= z && x > 0) {
        set_points = x * 7;
    } else if (y < x && y <= z) {
        set_points = y * 7;
    } else if (z < x && z < y) {
        set_points = z * 7;
    } else {
        set_points = 0;
    }
    return set_points;
}
/**
 * works out total points
 */
function workout_total_points() {
    workout_wild();
    let total_points = workout_set_points(cog + cog_wild, compass + compass_wild, tablet + tablet_wild) + workout_indivdual_score(cog + cog_wild, compass + compass_wild, tablet + tablet_wild);
    update_points(total_points);
    reset_wilds();
}
/**
 * updates the DOM with the correct points.
 */
function update_points(points) {
    let score = document.getElementsByTagName("h2");
    score[0].innerHTML = `${points}`;
}
/**
 * works out best option for wild science cards
 */
function workout_wild() {
    let incremented = wilds_incremented(wilds_array(wild))
    reset_wilds()
    let singular = workout_wild_singular()
    if (incremented > singular) {
        reset_wilds();
        wilds_incremented(wilds_array(wild));
    }
}


function workout_wild_singular() {
    let cog_wild_total = 0;
    let compass_wild_total = 0;
    let tablet_wild_total = 0;

    for (let x = 1; x <= wild; x++) {
        cog_wild_total = workout_set_points(cog + cog_wild + 1, compass + compass_wild, tablet + tablet_wild) + workout_indivdual_score(cog + cog_wild + 1, compass, tablet + tablet_wild);
        compass_wild_total = workout_set_points(cog + cog_wild, compass + compass_wild + 1, tablet) + workout_indivdual_score(cog + cog_wild, compass + compass_wild + 1, tablet + tablet_wild);
        tablet_wild_total = workout_set_points(cog + cog_wild, compass + compass_wild, tablet + 1) + workout_indivdual_score(cog + cog_wild, compass + compass_wild, tablet + tablet_wild + 1);
        if (cog_wild_total > compass_wild_total && cog_wild_total > tablet_wild_total) {
            cog_wild++;
        } else if (compass_wild_total > cog_wild_total && compass_wild_total > tablet_wild_total) {
            compass_wild++;
        } else {
            tablet_wild++;
        }

    }
    return workout_set_points(cog + cog_wild, compass + compass_wild, tablet + tablet_wild) + workout_indivdual_score(cog + cog_wild, compass + compass_wild, tablet + tablet_wild);
}

function reset_wilds() {
    cog_wild = 0;
    compass_wild = 0;
    tablet_wild = 0;
}

function wilds_array(num) {
    let wilds = [0, 0, 0];
    for (let x = 0; num > x; x++) {
        if (x > 2) {
            wilds[x - (Math.floor(x / 3) * 3)]++;
        } else {
            wilds[x]++;
        }
    }
    return wilds;
}

function wilds_incremented(x) {
    let indexes = [0, 1, 2];
    for (let z = 0; z < wild / 3; z++) {
        indexes.push(0, 1, 2);
    }
    let total_points = workout_set_points(cog + x[indexes[0]], compass + x[indexes[1]], tablet + x[indexes[2]]) + workout_indivdual_score(cog + x[indexes[0]], compass + x[indexes[1]], tablet + x[indexes[2]]);
    cog_wild = x[indexes[0]];
    compass_wild = x[indexes[1]];
    tablet_wild = x[indexes[2]];
    for (let y = 0; y < x.length; y++) {
        console.log(total_points)
        let test = workout_set_points(cog + x[indexes[0 + y]], compass + x[indexes[1 + y]], tablet + x[indexes[2 + y]]) + workout_indivdual_score(cog + x[indexes[0 + y]], compass + x[indexes[1 + y]], tablet + x[indexes[2 + y]]);
        console.log(test)
        if (total_points < test) {
            total_points = test;
            cog_wild = x[indexes[0 + y]];
            compass_wild = x[indexes[1 + y]];
            tablet_wild = x[indexes[2 + y]];
        }
    }

    return total_points;
}