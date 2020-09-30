var timerEL = document.getElementById("timer"),
    questionEl = document.getElementById("question"),
    listEl = document.getElementById("list"),
    item = document.getElementsByTagName("li"),
    answer = document.getElementsByTagName("button"),
    time = "60"

window.onload = start();

function start() {
    questionEl.textContent = "Welcome to my code quiz! This quiz is timed, you have a naxinmum of 60 seconds to answer all of the questions! Be careful, you will lose 10 seconds for each incorrect answer! Once you answer all of the questions, or the timer reaches 0, you may enter your high score!";
    listEl.appendChild(document.createElement("li"));
    item[0].appendChild(document.createElement("button"));
    answer[0].className = "btn btn-primary btn-lg btn-block";
    answer[0].textContent = "Start quiz";
    answer[0].id = "ans1";
    document.getElementById("ans1").onclick = function() { timer() };
}

function timer() {
    var downloadTimer = setInterval(function() {
        if (time <= 0) {
            end();
        } else {
            document.getElementById("timer").innerHTML = time + " seconds remaining";
        }
        time -= 1;
    }, 1000);
    q1()

}

// question 1
function q1() {
    questionEl.textContent = "Where is the JavaScript placed inside an HTML document or page?";
    listEl.appendChild(document.createElement("li"));
    listEl.appendChild(document.createElement("li"));
    listEl.appendChild(document.createElement("li"));
    item[1].appendChild(document.createElement("button"));
    item[2].appendChild(document.createElement("button"));
    item[3].appendChild(document.createElement("button"));
    answer[0].textContent = "In the <meta> section";
    answer[0].id = "ans1";
    answer[1].className = "btn btn-primary btn-lg btn-block";
    answer[1].textContent = "In the <footer> section";
    answer[1].id = "ans2";
    answer[2].className = "btn btn-primary btn-lg btn-block";
    answer[2].textContent = "In the <body> and <head> sections"; // correct
    answer[2].id = "ans3";
    answer[3].className = "btn btn-primary btn-lg btn-block";
    answer[3].textContent = "In the <title> section";
    answer[3].id = "ans4";
    document.getElementById("ans1").onclick = function() { q1w() };
    document.getElementById("ans2").onclick = function() { q1w() };
    document.getElementById("ans3").onclick = function() { q2() };
    document.getElementById("ans4").onclick = function() { q1w() };
}

function q1w() {
    time = time - 10;
    q2()
}

// question 2
function q2() {
    questionEl.textContent = "What is the element called that can continue to execute a block of code as long as the specified condition remains true?";
    answer[0].textContent = "Repeater";
    answer[1].textContent = "Loop"; // correct
    answer[2].textContent = "Clone";
    answer[3].textContent = "Debugger";
    document.getElementById("ans1").onclick = function() { q2w() };
    document.getElementById("ans2").onclick = function() { q3() };
    document.getElementById("ans3").onclick = function() { q2w() };
    document.getElementById("ans4").onclick = function() { q2w() };
}

function q2w() {
    time = time - 10;
    q3()
}

// question 3
function q3() {
    questionEl.textContent = "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?";
    answer[0].textContent = "Boolean";
    answer[1].textContent = "Condition";
    answer[2].textContent = "CSS";
    answer[3].textContent = "Events"; // correct
    document.getElementById("ans1").onclick = function() { q3w() };
    document.getElementById("ans2").onclick = function() { q3w() };
    document.getElementById("ans3").onclick = function() { q3w() };
    document.getElementById("ans4").onclick = function() { q4() };
}

function q3w() {
    time = time - 10;
    q4()
}

// question 4
function q4() {
    questionEl.textContent = "What elements are used to test for true or false values stored in variables?";
    answer[0].textContent = "Conditional statements"; // correct
    answer[1].textContent = "Trigger readers";
    answer[2].textContent = "Comparison and logical operators";
    answer[3].textContent = "String theory";
    document.getElementById("ans1").onclick = function() { q5() };
    document.getElementById("ans2").onclick = function() { q4w() };
    document.getElementById("ans3").onclick = function() { q4w() };
    document.getElementById("ans4").onclick = function() { q4w() };
}

function q4w() {
    time = time - 10;
    q5()
}

// question 5 
function q5() {
    questionEl.textContent = "Which of the following function of Boolean object returns the primitive value of the Boolean object?";
    answer[0].textContent = "toSource()";
    answer[1].textContent = "toString()";
    answer[2].textContent = "valueOf()"; // correct
    answer[3].textContent = "None of the above";
    document.getElementById("ans1").onclick = function() { q5w() };
    document.getElementById("ans2").onclick = function() { q5w() };
    document.getElementById("ans3").onclick = function() { end() };
    document.getElementById("ans4").onclick = function() { q5w() };
}

function q5w() {
    time = time - 10;
    end()
}


// goto high scores
function end() {
    localStorage.setItem("timeLeft", time);
    window.location.assign("highscore.html");
}