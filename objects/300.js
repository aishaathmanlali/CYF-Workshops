// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
    const cyfLocations = ["Birmingham", "Cape Town", "Glasgow", "London", "Manchester"];
    return cyfLocations.includes(person.location);
}

const mo = {
    name: "Mo",
    location: "Glasgow",
    focus: "React",
};

const sayed = {
    name: "Sayed",
    location: "Edinburgh",
    focus: "SQL",
}

console.assert(checkLivesNearCYF(mo));
console.assert(!checkLivesNearCYF(sayed));
