        
window.onload = function() {
        const memoryCards = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"];
        const memoryPic = ['image/dib1.svg', 'image/dib1.svg', 'image/dib2.svg', 'image/dib2.svg', 'image/dib3.svg', 'image/dib3.svg', 'image/dib4.svg', 'image/dib4.svg', 'image/dib5.svg', 'image/dib5.svg', 'image/dib6.svg', 'image/dib6.svg', 'image/dib7.svg', 'image/dib7.svg', 'image/dib8.svg', 'image/dib8.svg'];
        const memoryId = ['dib1', 'dib1a', 'dib2', 'dib2a', 'dib3', 'dib3a', 'dib4', 'dib4a', 'dib5', 'dib5a', 'dib6', 'dib6a', 'dib7', 'dib7a', 'dib8', 'dib8a']
        
        const matchedCards = []; // array vacia para parejas
        let shuffledCards = []; //array vacio para cartas barrehadas
        let firstClicked; 
        let secondClicked;
         let startMove = 0;
        let scoreCount = 0;
        let sec = 0;
        let min = 0;
        let turnCount = 0;
        let figure=document.querySelector('.back');
        const turnCounter = document.querySelector('.turn-counter');
        const scoreCounter = document.querySelector('.score-counter');
        const cardBox = document.querySelector('.card');
        const newGame = document.querySelector('.newGame');
        const retryGame = document.querySelector('.retryGame');
        let clickedCard;
        let clicks = [];
        const secText = document.querySelector('.sec');
        const minText = document.querySelector('.min');
        let newClass = [];
        let reply_click = [];
         let turn;
         let turnPlace;
 init();
        // Initializing function
        
        function init() {
            turnCount = 0;
            scoreCount = 0;
            turnCounter.innerText = 0;
            scoreCounter.innerText = scoreCount;
            control = [];
            

        
        //starting the shuffle function

           function shuffle(memoryId) {
    
    for (let i=0;i<memoryId.length;i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [memoryId[i], memoryId[j]] = [memoryId[j], memoryId[i]];
    }
   return memoryId;

};

newTurn();

function newTurn(){ 
    let shuffledCards =shuffle(memoryId);
    for(var l=memoryCards.length;l>0;l--){
       var memo=memoryCards[l];
    turn=document.getElementById(memo).lastElementChild; 
    
console.log(turn);
/*turnplace=turn;turnPlace.setAttribute("id", shuffledCards[l]);  



/*for (turnPlace.getElementById==='dib1') {turnPlace.insertAdjacentHTML('beforeend', '<img class="img" src="image/dib1.svg">');}
                   turnPlace.insertAdjacentHTML('beforeend', '<img class="img" src="'+shuffledCards[l]+'">');*/
  }           
 }

 function cardsUpdate(){
    firstClicked = document.querySelector(`#${clicks[0]}`);
    secondClicked = document.querySelector(`#${clicks[1]}`);
    console.log(firstClicked);
    console.log(secondClicked);
  }
  // Comparing cards
  
  function compareCards(){
    cardsUpdate();
    firstClicked.classList.add('face');
    secondClicked.classList.add('face');
    clicks = [];
    
  }console.log(firstClicked);
 document.addEventListener('click', function(e) { 

                    let startMove = 0;
                    clickedCard = e.target;
                 


                    // clickedCard class .clicked verifies if the clicked element in the screen is a card.
                    if (clickedCard.classList.contains('front')) {
                        clickedCard.parentElement.classList.add('clicked');

                        startMove++;
                        if (startMove === 1) {
                            startCronometer();
                        }
                        
                 
                
                        if (clickedCard.parentElement.classList.contains('clicked')) {
                            clickedCard.parentElement.classList.add('flip');
                        }
                        
                        
                        let result=clickedCard.nextElementSibling.id;
                         console.log(clickedCard);
                        console.log(result);
                        /*document.getElementById("item2").previousSibling.;clicks[] controls how many cards were clicked. Then its length is = 2, the if statements run and the array becomes empty*/
                       clicks.push(result);
                      
      if (clicks.length === 2) {
        // If to know if the clicked elements are equal, 
      if (clicks[0] === clicks[1].slice(0, -1) || clicks[1] === clicks[0].slice(0, -1)) {
          cardBox.classList.remove('clicked');
          // the game waits a half a second to avoid users to click in another card
          setTimeout(function(){
            cardBox.classList.add('clicked');
          }, 500);
          control.push(clicks[0]);
          control.push(clicks[1]);
          clicks = [];
          // scoreCount keep track of how many points player made. Each time two cards match.
          scoreCount += 2;
          turnCount++;
        
          // is scoreCount = 16, the winning screen is shown after half second and the DOM is updated with the score, stars and time
          if (scoreCount === 16) {
            breakTime();
            setTimeout(function(){
              showFinal.classList.remove('hide');
              finalMovements.innerText = " " + turnCount;
              finalMinutes.innerText = "0" + min;
              finalSeconds.innerText = sec;
              getScoreInStars();
            }, 500);
          }
                                // when cards does not match, cardsUpdate update the element assigned in the DOM. Below, compareCards(); make sure they are not equal and inser .front class back
                            } else if (control.indexOf(clickedCard.nextElementSibling.id) < 0) {
                                cardBox.classList.remove('clicked');
                                cardsUpdate();
                                setTimeout(function() {
                                    compareCards();
                                    cardBox.classList.add('clicked');
                                    firstClicked.parentElement.classList.remove('flip');
                                    secondClicked.parentElement.classList.remove('flip');
                                }, 1200);
                                turnCount++;

                         starAdd();
          // is scoreCount = 80, the winning screen is shown after half second and the DOM is updated with the score, stars and time
          if (scoreCount === 80) {
            breakTime();
            setTimeout(function(){
              showFinal.classList.remove('hide');
              finalMovements.innerText = " " + turnCount;
              finalMinutes.innerText = "0" + min;
              finalSeconds.innerText = seconds;
              getScoreInStars();
            }, 500);
          }
          // when cards does not match, cardsUpdate update the element assigned in the DOM. Below, compareCards(); make sure they are not equal and inser .front class back
        } else if (control.indexOf(clickedCard.nextElementSibling.id) < 0){
          cardBox.classList.remove('clicked');
          cardsUpdate();
          setTimeout(function(){
            compareCards();
            cardBox.classList.add('clicked');
            firstClicked.parentElement.classList.remove('flip');
            secondClicked.parentElement.classList.remove('flip');
          }, 1200);
          turnCount++;
          starAdd();
        }
      }
      // Update the DOM with moves and score
      turnCounter.innerText = turnCount;
      scoreCounter.innerText = scoreCount;
    };
  });
  // Configuring Try Again button
  // The button resets the game calling init() one more time
  /*retryGame.addEventListener('click', function(){
    location.reload();
  });*/
  newGame.addEventListener('click', function(){
    location.reload();
  });
  // The time is controled using if statements, using seconds for less than 59, minutes for 60+. The maximum time player can elapse is 60 minutes. After that, he get's an alert and the game restarts
  function startCronometer(){
    time = setInterval(function(){
      if(sec < 59) {
        sec++;
        if(sec < 10) {
          secText.innerText = '0' + sec;
        } else{
          secText.innerText = sec;
        }
      } else if(sec >= 59) {
        min++;
        sec = 0;
        if(min < 10){
          minText.innerText = '0' + min;
          secText.innerText = '0' + sec;
        } else{
          minText.innerText = min;
          secText.innerText = sec;
        }
      } if(min === 60) {
        alert('Your time is over!');
        location.reload();
      }
    }, 1000);
  }
  // Make time stop running
  function breakTime(){
    clearInterval(time);
  }
  // Ponctuation stars - Remove the color class from star so player can know how many he has. Stars are based on moves, not time.
  // Stars updated to give one at least
  function starAdd(){
    if (turnCount > 18){
      secondStar.classList.remove('color-red');
    } else if (turnCount > 14){
      thirdStar.classList.remove('color-red');
    }
  }
  // The function get the stars according to the score to bring them to the final screen
  function getScoreInStars(){
    starAdd();
    retrieveStars = scoreInStars.innerHTML;
    finalScreenStars.innerHTML = retrieveStars;
  }
};

}