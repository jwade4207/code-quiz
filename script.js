var quesDiv =document.getElementById('question');
var displayQues = document.getElementById('displayQuestions');
var answers = document.getElementById('answers');
var endscreen = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var timerEl = document.getElementById('countdown')
var mainEl = document.getElementById('main')
var startBtn = document.getElementById('start')
var saveBtn = document.getElementById('save-score')
var time = 75;
var clock

function startGame() {
    var startScreen = document.getElementById('begin-game')
    startScreen.setAttribute('class', 'hide-div')
    quesDiv.removeAttribute('class')
    clock = setInterval(secondsPassed, 1000)
    timerEl.textContent = time
    getQuestion()
}
function secondsPassed() {
    time--
    timeEl.textContent = time
    if (time <= 0) {
        endGame()
    }
}
function endGame() {
    clearInterval(clock)
    quesDiv.setAttribute('class', 'hide-div')
    endscreen.removeAttribute('class')
    timerEl.textContent = time
}
currentQuesIndex = 0
function getQuestion() {
    var currentQues = quiz[currentQuesIndex]
    displayQues.textContent = currentQues.Question
    answers.innerHTML = ''
    currentQues.answers.forEach(function(answer, i){
        var choiceButton = document.createElement('button')
        choiceButton.setAttribute('class', 'choice') 
        choiceButton.setAttribute('value', answer)
        choiceButton.textContent = i + 1 + answer
        answers.appendChild(choiceButton)

        choiceButton.onclick = makeChoice
    })

}
function makeChoice() {
   if (this.value !== quiz[currentQuesIndex].correctAnswer) {
      time -= 10
      if (time < 0) {
          time = 0
      }
  
  timerEl.textContent = time 
  answerDisplay.textContent = 'Wrong, you have lost 10 seconds' 
} else {
    answerDisplay.textContent ='Correct!'
}
answerDisplay.setAttribute('class', 'answer-prompt')
setTimeout(function() {
    anserDisplay.setAttribute('class', 'hide-div answer-prompt')
}, 1000)
currentQuesIndex++
if (currentQuesIndex === quiz.length) {
    endGame()
} else {getQuestion()
}
}
startBtn.onclick = begin-game;