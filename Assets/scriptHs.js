var listEl = document.getElementById("scores"),
    lineEl = document.getElementsByTagName("li"),
    buttonEl = document.getElementsByTagName("button"),
    names = [],
    scores = [];

// push previous name and score to string
window.onload = function() {
    scores.push(localStorage.getItem("score"));
    names.push(localStorage.getItem("name"));
};

setTimeout(function() {
    var name = prompt("Enter your name to log your high score!");
    // push new name and score to storage
    localStorage.setItem("score", localStorage.getItem("timeLeft"));
    localStorage.setItem("name", name);
    // push new name and score to string
    scores.push(localStorage.getItem("timeLeft"));
    names.push(localStorage.getItem("name"));
    // push name and score history to storage
    localStorage.setItem("score", scores);
    localStorage.setItem("name", names);
    split()
}, 500);

function split() {
    scores = localStorage.getItem("score");
    names = localStorage.getItem("name");
    var scorez = scores.split(",");
    var namez = names.split(",");
    for (var i = 0; i < namez.length; i++) {
        listEl.appendChild(document.createElement("li"));
        lineEl[i].appendChild(document.createElement("button"));
        buttonEl[i].className = "btn btn-primary btn-lg btn-block";
        buttonEl[i].textContent = namez[i] + " " + scorez[i];
    }
}