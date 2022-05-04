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

var questions = [
    {
        question: "question one",
        choices: ["a", "b", "c", "d"],
        correct: "a"
    },
    {
        question: "question two",
        choices: ["aa", "bb", "cc", "dd"]
    },
    {
        question: "question three",
        choices: ["aaa", "bbb", "ccc", "ddd"]
    }
]

start.addEventListener("click", function(){
    homePage.classList.add("hidden");
    questiondiv.classList.remove("hidden");
    renderQuestion();
})

function renderQuestion(event) {
    if(event.target.innerText == questions[counter].correct) {
        alert("correct");
    }
    question.innerText = questions[counter].question;
    c1.innerText = questions[counter].choices[0];
    c1.value = questions[counter].choices[0];
    c2.innerText = questions[counter].choices[1];
    c3.innerText = questions[counter].choices[2];
    c4.innerText = questions[counter].choices[3];

    counter++;
}

c1.addEventListener("click", renderQuestion);
c2.addEventListener("click", renderQuestion);
c3.addEventListener("click", renderQuestion);
c4.addEventListener("click", renderQuestion);

// create array of objects containing question key and choice key
// choice key is made up of an array with different choices
// create event listener with counter to keep track of what question 