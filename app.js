var scores, roundScore, activePlayer, gamePlaying;

/*
scores = [0,0];
roundScore = 0;
activePlayer = 0; //change this to 0 or 1
*/

init ();


//setter
//document.querySelector('#current-' + activePlayer).textContent = card; //# for picking ids - selecting current score // using text content method to change text

//other method:
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + card + '</em>';

//getter
//var x = document.querySelector('#score-0').textContent; //to read element id score-0
//console.log(x);

//document.querySelector('.card').style.display = 'none'; //.style.css = value ---> this is to hide the card 

//when working with ID's
//setting all scores to 0
/*
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'tn
document.getElementById('current-1').textContent = '0'
*/

/*
function btn() {
    //do something here
}
btn();

document.querySelector('.btn-hit').addEventListener('click', btn);
//btn is the callback function because it is passed into another function (event listener) to call for us
*/

//or we can use anonymous function 
document.querySelector('.btn-hit').addEventListener('click', function() {
    if (gamePlaying){
        //1.Random number 
        var card = Math.floor(Math.random() * 13) + 1;
    
        //2.Display the result
        var cardDOM = document.querySelector('.card');
        cardDOM.style.display = 'block';
        cardDOM.src = 'card-' + card + '.jpg';
    
        //3.Update the round score iF the card is NOT a 1 
    
        if (card !== 1) {
            //add score
            roundScore += card; //we can do this because roundScore is a global variable
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player
            nextPlayer();
            
            
            //option of choosing for a 1 or 11
            
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
        
        else if (scores[activePlayer] > 21 || roundScore > 21){
            document.querySelector('#name-'+activePlayer).textContent = 'Loser!';
            document.querySelector('.card').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('loser');
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
    //roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    //switching active classes
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active'); 
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
        
    //making card disappear with a 1
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







































