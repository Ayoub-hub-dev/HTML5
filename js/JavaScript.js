var myName = document.getElementById('inp'),
    myDiv  = document.getElementById('div');

function myFar() {
    "use strict";
    var Friends = "lahoucine";
    switch (Friends) {
        case ("lahoucine"):
            myDiv.innerHTML = "Welecome";
            break;
        default:
            myDiv.innerHTML = "Sorry your name is not in list of the Beast friend";
            break;
    }
}