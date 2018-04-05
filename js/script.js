 const memoryCards = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];
 const memoryPic = ['image/dib1.svg', 'image/dib1.svg', 'image/dib2.svg', 'image/dib2.svg', 'image/dib3.svg', 'image/dib3.svg', 'image/dib4.svg', 'image/dib4.svg', 'image/dib5.svg', 'image/dib5.svg', 'image/dib6.svg', 'image/dib6.svg', 'image/dib7.svg', 'image/dib7.svg', 'image/dib8.svg', 'image/dib8.svg'];
 const memoryId = ['dib1b', 'dib1a', 'dib2b', 'dib2a', 'dib3b', 'dib3a', 'dib4b', 'dib4a', 'dib5b', 'dib5a', 'dib6b', 'dib6a', 'dib7b', 'dib7a', 'dib8b', 'dib8a']
 const matchedCards = []; // array vacia para parejas
 let shuffledCards = []; //array vacio para cartas barrehadas
 let firstClicked;
 let secondClicked;
 let startMove = 0;
 let scoreCount = 0;
 let turnCount = 0;
 let sec = 0;
 let min = 0;
 let time;
 const secText = document.querySelector('.sec');
 const minText = document.querySelector('.min');
 const turnCounter = document.querySelector('.turn');
 const scoreCounter = document.querySelector('.score');
 const finalTurn = document.querySelector('.finalturn');
 const finalScore = document.querySelector('.finalscore');
 const finalMin = document.querySelector('.finalmin');
 const finalSec = document.querySelector('.finalsec');
 const finalPanel = document.querySelector('.finalpanel')
 const cardBox = document.querySelector('.card');
 let clickedCard;
 let clicks = [];
 let figure = document.querySelector('.back');
 const newGame = document.querySelector('.newGame');
  const stopTimer = document.querySelector('.timer');
 const winner = document.querySelector('.winner');
 let newClass = [];
 let reply_click = [];
 let turn;

 init();
 // Initializing function
 function init() {
     turnCount = 0;
     scoreCount = 0;
     turnCounter.innerText = 0;
     scoreCounter.innerText = scoreCount;
     control = [];
     //starting the shuffle function
 }

 function shuffle(memoryId) {
     for (let i = 0; i < memoryId.length; i++) {
         const j = Math.floor(Math.random() * (i + 1));
         [memoryId[i], memoryId[j]] = [memoryId[j], memoryId[i]];
     }
     return memoryId;
 };
 newTurn();

 function newTurn() {
     let shuffledCards = shuffle(memoryId);
     for (var l = 0; l < memoryCards.length; l++) {
         var memo = memoryCards[l];
         turn = document.getElementById(memo);
         //console.log(turn);
         turnPlace = turn.lastElementChild;
         //console.log(turnPlace);
         turnPlace.setAttribute("id", shuffledCards[l]);
     }
 }
  newGame.addEventListener('click', function(){
    location.reload();
  });
  
 /*first and second clicks detected  */
 function cardsUpdate() {
     firstClicked = document.querySelector(`#${clicks[0]}`);
     secondClicked = document.querySelector(`#${clicks[1]}`);
 }
 // Comparing cards
 function compareCards() {
     cardsUpdate();
     firstClicked.classList.add('face');
     secondClicked.classList.add('face');
     clicks = [];
 }
 document.addEventListener('click', function(e) {
     clickedCard = e.target;
     let startMove = 0;
       if (clickedCard.classList.contains('front')) {
         clickedCard.parentElement.classList.add('clicked');
         startMove++;
         if (startMove === 1) {
             startCronometer();
         }
         if (clickedCard.parentElement.classList.contains('clicked')) {
             clickedCard.parentElement.classList.add('flip');
         }
         let result = clickedCard.nextElementSibling.id;
         /*clicked cards ids pushed to clicks array*/
         clicks.push(result);
     }

     function startCronometer() {
         time = setInterval(function() {
             if (sec < 59) {
                 sec++;
                 if (sec < 10) {
                     secText.innerText = '0' + sec;
                 } else {
                     secText.innerText = sec;
                 }
             } else if (sec >= 59) {
                 min++;
                 sec = 0;
                 if (min < 10) {
                     minText.innerText = '0' + min;
                     secText.innerText = '0' + sec;
                 } else {
                     minText.innerText = min;
                     secText.innerText = sec;
                 }
             }
             if (min === 60) {
                 alert('Time over!');
                 location.reload();
             }
         }, 1000);
     }

      function stopTime() {
    clearInterval(time);
  }
     if (clicks.length === 2) {
         // If the clicked elements are equal, 
         if (clicks[0].slice(0, -1) === clicks[1].slice(0, -1)) {
             cardBox.classList.remove('clicked');
             control.push(clicks[0]);
             control.push(clicks[1]);
             clicks = [];
             // scoreCount keep track of how many points player made. Each time two cards match, it sums 10 (final score is 80)
             scoreCount += 50;
             turnCount++;
             
                  if (scoreCount === 400) {
                 
                setTimeout(function(){
                     finalPanel.classList.remove('hide');
                     finalPanel.style.visibility = 'visible';
              finalTurn.innerText = "movements:" + turnCount;
              finalScore.innerText = "score" + scoreCount;
              finalMin.innerText = "0:" + min;
              finalSec.innerText = sec;
              winner.classList.remove('hide');
                 stopTime();         
            }, 500);
             }
             // when cards does not match, cardsUpdate update the element assigned in the DOM. Below, compareCards(); make sure they are not equal and inser .front class back
         } else if (control.indexOf(clickedCard.id) < 0) {
             cardBox.classList.remove('clicked');
             cardsUpdate();
             setTimeout(function() {
                 compareCards();
                 firstClicked.parentElement.classList.remove('flip');
                 secondClicked.parentElement.classList.remove('flip');
             }, 1200);
             turnCount++;
         }
     }
     turnCounter.innerText = turnCount;
     scoreCounter.innerText = scoreCount;
  
 });