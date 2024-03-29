import { duplicateArray, createMemeArray, shuffle } from "./utils.js";
import { createGameMenu } from "./gameMenu.js";

export const startGame = (difficult) => {
const gameSection = document.querySelector('.game-section__container');
const gameTable = document.createElement('div');
const restartBtn = document.createElement('button');
const cardsArray = createMemeArray(difficult);
const duplicatedCardsArray = duplicateArray(cardsArray);
let resultsArray = [];
let counter = 0;
let clickable = true;

    gameSection.innerHTML = '';
    restartBtn.textContent = 'Рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    gameSection.append(gameTable, restartBtn);
    restartBtn.addEventListener('click', createGameMenu);

    shuffle(duplicatedCardsArray);

for (var i = 0; i < duplicatedCardsArray.length; i++) {
 let card = document.createElement('div');
  card.dataset.item = duplicatedCardsArray[i];
  card.dataset.view = "card";
  gameTable.append(card);
 
    
        card.onclick = function () {
        if (this.className != 'flipped' && this.className != 'correct'){
            clickableCheck ();
              if (clickable === true){
                this.className = 'flipped';
               let result = this.dataset.item;
               resultsArray.push(result);
             } else{
               console.log("Попытка перевернуть больше 3 карт");
               return;
               }
            
        } 
    
        if (resultsArray.length > 1) {
          if (resultsArray[0] === resultsArray[1]) {
            check("correct");
            counter ++;
            win ();
            resultsArray = [];
          } else {
            check("reverse");
            resultsArray = [];
            
          }

        }
    
      }

    };

    const clickableCheck = function(){
      let x = document.getElementsByClassName("flipped");
      if (x.length === 2){
       clickable = false;
      } else{
        clickable = true;
      }
    }

    const check = function(className) {
      let x = document.getElementsByClassName("flipped");
     
      setTimeout(function() {
    
        for(var i = (x.length - 1); i >= 0; i--) {
          x[i].className = className;
        }
    
      },500);
   
    }
    let win = function(){
     if ( counter === cardsArray.length){
      console.log('Победа')
      //to do: Окно победы
    } 
   }
  }
  