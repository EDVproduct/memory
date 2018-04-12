 const memoryCards = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];
 const memoryPic = ['image/dib1.svg', 'image/dib1.svg', 'image/dib2.svg', 'image/dib2.svg', 'image/dib3.svg', 'image/dib3.svg', 'image/dib4.svg', 'image/dib4.svg', 'image/dib5.svg', 'image/dib5.svg', 'image/dib6.svg', 'image/dib6.svg', 'image/dib7.svg', 'image/dib7.svg', 'image/dib8.svg', 'image/dib8.svg'];
 const memoryId = ['dib1b', 'dib1a', 'dib2b', 'dib2a', 'dib3b', 'dib3a', 'dib4b', 'dib4a', 'dib5b', 'dib5a', 'dib6b', 'dib6a', 'dib7b', 'dib7a', 'dib8b', 'dib8a']
 const matchedCards = []; // array vacia para parejas
 let shuffledCards = []; //array vacio para cartas barrehadas
 let firstClicked;
 let secondClicked;
 const cardBox = document.querySelector('.card');
 let clickedCard;
 let clicks = [];
 let figure = document.querySelector('.back');
 let turn;
 //points and clock variables
 let startMove = 0;
 let scoreCount = 0;
 let turnCount = 0;
 const turnCounter = document.querySelector('.turn');
 const scoreCounter = document.querySelector('.score');
 const finalTurn = document.querySelector('.finalturn');
 const finalScore = document.querySelector('.finalscore');
 const finalStars = document.querySelector('.stars');
 const finalStar = document.querySelector('.star');
 const finalPanel = document.querySelector('.finalpanel')
 const stopTimer = document.querySelector('.timer');
 const winner = document.querySelector('.winner');
 const loser = document.querySelector('.loser');
 const newGame = document.querySelector('.newGame');
 const newStart = document.querySelector('#newStart');
 const myStars = document.querySelector('.colored');
 const starOne = document.querySelector('#star1');
 const starTwo = document.querySelector('#star2');
 const starThree = document.querySelector('#star3');
 const starA = document.querySelector('#stara');
 const starB = document.querySelector('#starb');
 const starC = document.querySelector('#starc');


 init();
 // Initializing function
 function init() {

    turnCount = 0;
    scoreCount = 0;
    let sec = 0;
    let min = 0;
    turnCounter.innerText = 0;
    scoreCounter.innerText = scoreCount;
    control = [];
     //starting the shuffle function
 }
start = document.getElementById("start"),
start.addEventListener("click", function(){
  // start counting
  })
function trigger(){
  if(start.disabled) {
      /* start button will be disabled once it's clicked */
      start.disabled = false;
      stop.disabled = true;
  } else {
      start.disabled = true;
      stop.disabled = false;
  }
};
/*stopwatch*/
 var counter,
    time = 900,
        sec = document.getElementById("sec"),
        min = document.getElementById("min"),
        start = document.getElementById("start"),
        reset = document.getElementById("reset"),
        stop = document.getElementById("stop");

    start.addEventListener("click", function () {
        toggle();
        counter = setInterval(count, 1000);
    });

    stop.addEventListener("click", function () {
        toggle();
        clearInterval(counter);
         loser.style.visibility = 'hidden';
    });

    reset.addEventListener("click", function () {
        time = 900;
        sec.innerHTML = time % 60;
        min.innerHTML = Math.floor(time / 60);
        loser.style.visibility = 'hidden';
    });

    function count() {
        if (time === 0) {
            sec.innerHTML = 0;
            min.innerHTML = 0;
            toggle();
            clearInterval(counter);
             loser.style.visibility = 'visible';
        } else {
            time--;
            sec.innerHTML = time % 60;
            min.innerHTML = Math.floor(time / 60);
        }
    }

    function toggle() {
        if (start.disabled) {
            start.disabled = false;
            stop.disabled = true;
        } else {
            start.disabled = true;
            stop.disabled = false
        }
    };
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
 newGame.addEventListener('click', function() {
     location.reload();
     clearInterval(sec);
 });
 /*first and second clicks detected  */
 function cardsUpdate() {
     firstClicked = document.querySelector(`#${clicks[0]}`);
     secondClicked = document.querySelector(`#${clicks[1]}`);
     //if 3 cards will be turned
     if (clicks[2]){clickedCard.parentElement.classList.remove('clicked');clickedCard.parentElement.classList.remove('flip');
 }
 }
 // Comparing cards
 function compareCards() {
     cardsUpdate();
 firstClicked.classList.add('front');
    secondClicked.classList.add('front');
     clicks = [];
 }
 document.addEventListener('click', function(e) { 
     clickedCard = e.target;
     let startMove = 0; 

     if (clickedCard.classList.contains('front')) {
         clickedCard.parentElement.classList.add('clicked');
         startMove++;
         if (startMove === 1) {
        counter = setInterval(count, 1000);
        }
       



         if (clickedCard.parentElement.classList.contains('clicked')) {
             clickedCard.parentElement.classList.add('flip');
         }
         let result = clickedCard.nextElementSibling.id;
         /*clicked cards ids pushed to clicks array*/
         clicks.push(result);
     }

   

     function starRate() {
         if (turnCount > 20) {
             starTwo.classList.remove('colored');
         } else if (turnCount > 15) {
             starThree.classList.remove('colored');
         }
     }
     if (clicks.length === 2) {
         // If the clicked elements are equal, 
         if (clicks[0].slice(0, -1) === clicks[1].slice(0, -1)) {
        cardBox.classList.remove('clicked');
             setTimeout(function(){
            cardBox.classList.add('clicked');
          }, 1200);
           
             control.push(clicks[0]);
             control.push(clicks[1]);
             clicks = [];
             // scoreCount keep track of how many points player made. Each time two cards match, it sums 10 (final score is 80)
             scoreCount += 50;
             turnCount++;
             starRate();

             if (scoreCount === 400) {

                 setTimeout(function() {
                     finalPanel.classList.remove('hide');
                     finalPanel.style.visibility = 'visible';
                     finalTurn.innerText = turnCount;
                     finalScore.innerText = scoreCount;
                     starScore();
                     winner.classList.remove('hide');
                      toggle();                      
        clearInterval(counter);
        loser.style.visibility = 'hidden';
                 }, 600);
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
             starRate();
         }
     }

     turnCounter.innerText = turnCount;
     scoreCounter.innerText = scoreCount;

     function starScore() {
         starRate();
         var mySta = document.getElementsByClassName('colored');
         if (starOne.classList.contains('colored')) {
             starA.classList.add('colored');
         }
         if (starTwo.classList.contains('colored')) {
             starB.classList.add('colored');
         }

         if (starThree.classList.contains('colored')) {
             starC.classList.add('colored');
         }


     }
 });