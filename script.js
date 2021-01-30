
// GAME JS
//variable list
 const rightAnswer = document.querySelectorAll('.correct-answer')
 const wrongAnswer = document.querySelectorAll('.incorrect-answer')

let score = 0
let winMessage = document.getElementsByClassName('winner')[0]
let loseMessage = document.getElementsByClassName('you-lost')[0]


const scoreP = document.querySelector('.score')
const answerButtons = document.querySelectorAll('.answerButton')
const results =document.getElementById('results')
const game = document.getElementById('game')

let homePage = document.getElementById('home-page')
let gamePage = document.getElementsByClassName('game')[0]
let resultsPage = document.getElementsByClassName('results-page')[0]

let gameButton = document.getElementById('go-game-button')
let resultsButton = document.getElementById('results-button')
let backHomeButton = document.getElementById('play-again')



hideHomePage = () =>{
homePage.style.display = "none";
}
showResultsPage = () =>{
resultsPage.style.display = "flex";
    if (score > 4) {
        winMessage.style.display = "flex";
    } else if (score <= 4){
        loseMessage.style.display = "flex";
}
}

showGamePage = () =>{
    gamePage.style.display = "flex";
}
hideGamePage = () =>{
gamePage.style.display = "none";
}

gameButton.addEventListener('click', pizza = () =>{
 hideHomePage()
 showGamePage()
})
resultsButton.addEventListener('click', pepperoni = () =>{
    hideGamePage()
    showResultsPage()
})

backHomeButton.addEventListener('click', cheese = () =>{
    location.reload();
})


const scoreDiv = document.querySelector('.score-display')


for(i=0;i<rightAnswer.length;i++){
    console.log(rightAnswer[i])
rightAnswer[i].addEventListener('click', function correctScore(){
    if(score < 5){
        score++
        
    }
    scoreP.innerText = score

})

}
for(i=0;i<wrongAnswer.length;i++){
    wrongAnswer[i].addEventListener('click', function incorrectScore(){
        score--
        console.log(score)
        scoreP.innerText = score
    
    })
    }
