/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

/*
scores = [0,0];
roundScore = 0;
activePlayer = 0; //change this to 0 or 1
*/

init ();


//setter
//document.querySelector('#current-' + activePlayer).textContent = dice; //# for picking ids - selecting current score // using text content method to change text

//other method:
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//getter
//var x = document.querySelector('#score-0').textContent; //to read element id score-0
//console.log(x);

//document.querySelector('.dice').style.display = 'none'; //.style.css = value ---> this is to hide the dice 

//when working with ID's
//setting all scores to 0
/*
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'
*/

/*
function btn() {
    //do something here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn);
//btn is the callback function because it is passed into another function (event listener) to call for us
*/

//or we can use anonymous function 
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying){
        //1.Random number 
        var card = Math.floor(Math.random() * 13) + 1;
    
        //2.Display the result
        var cardDOM = document.querySelector('.card');
        cardDOM.style.display = 'block';
        cardDOM.src = 'card-' + card + '.jpg';
    
        //3.Update the round score iF the rolled number is NOT a 1 
    
        if (card !== 1) {
            //add score
            roundScore += card; //we can do this because roundScore is a global variable
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function() {
    
    if (gamePlaying){
        
        //add CURRENT score to GLOBAL score 
        scores[activePlayer] += roundScore;
    
        //update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        //check if the player won the game 
        if (scores[activePlayer] === 21) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.card').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
        //next player
        nextPlayer();
        }
    }
});

function nextPlayer() {
    //next player
    //ternary operator 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    //switching active classes
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active'); 
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
        
    //making dice disappear with a 1
    document.querySelector('.card').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
    
function init () {
        
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 
        
    document.querySelector('.card').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}







































