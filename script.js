var homePage = document.getElementById("home-page")
var start = document.getElementById("start")
var questiondiv = document.getElementById("questions")
var questionone = document.getElementById("qnumber")
var question = document.getElementById("question")
var c1 = document.getElementById("choice1")
var c2 = document.getElementById("choice2")
var c3 = document.getElementById("choice3")
var c4 = document.getElementById("choice4")
var counter = 0;
var score = 0;
var formdiv = document.getElementById("score-form");
var finalscore = document.getElementById("finalscore");
var initials = document.getElementById("initials");
var savebtn = document.getElementById("btn");
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

savebtn.addEventListener("click", function(){
    console.log(initials.value);
    console.log(score)
    var data = {
        initials: initials.value,
        score: score,
    }
    highscores.push(data);
    localStorage.setItem("highscores", JSON.stringify(highscores));
})

var questions = [
    {
        question: "On what NBA team does Luka Doncic play?",
        choices: ["Dallas Mavericks", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics"],
        correct: "Dallas Mavericks"
    },
    {
        question: "What country is Luka Doncic from?",
        choices: ["USA", "Germany", "Slovenia", "Canada"],
        correct: "Slovenia"
    },
    {
        question: "Who owns the Dallas Mavericks?",
        choices: ["Elon Musk", "Mark Cuban", "Jason Kidd", "Denzel Washington"],
        correct: "Mark Cuban"
    }
]

start.addEventListener("click", function(event){
    homePage.classList.add("hidden");
    questiondiv.classList.remove("hidden");
    renderQuestion(event);
})

function renderQuestion(event) {
    console.log(counter);
    if(event.target.value == questions[counter].correct) {
        alert("correct");
        score++;
    }
    else if ((event.target.innerText != "Start Quiz") && (event.target.value != questions[counter].correct)) {
        alert("incorrect");
    }
    if (event.target.innerText != "Start Quiz") {
        counter++;
    }
    if (counter == questions.length) {
        questiondiv.classList.add("hidden");
        formdiv.classList.remove("hidden");
        finalscore.innerText = score;
    }

    question.innerText = questions[counter].question;
    c1.innerText = questions[counter].choices[0];
    c1.value = questions[counter].choices[0];
    c2.innerText = questions[counter].choices[1];
    c2.value = questions[counter].choices[1];
    c3.innerText = questions[counter].choices[2];
    c3.value = questions[counter].choices[2];
    c4.innerText = questions[counter].choices[3];
    c4.value = questions[counter].choices[3];

}

c1.addEventListener("click", renderQuestion);
c2.addEventListener("click", renderQuestion);
c3.addEventListener("click", renderQuestion);
c4.addEventListener("click", renderQuestion);

// create array of objects containing question key and choice key
// choice key is made up of an array with different choices
// create event listener with counter to keep track of what question 