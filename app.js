var roundScore, activePlayer, gamePlaying, num, backCardNum;

num = 13;
/*
scores = [0,0];
roundScore = 0;
activePlayer = 0; //change this to 0 or 1
*/

init ();

function disableFlip () {
    document.querySelector('.btn-flip').disabled = true;
}
function disableHit () {
    document.querySelector('.btn-hit').disabled = true;
}


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




var hitClicks = 0; 
document.querySelector('.btn-hit').addEventListener('click', function() {
    
  hitClicks += 1; 
        //document.getElementById('current-' + activePlayer).textContent = roundScore;
        //roundScore += backCardNum;
   
    if (gamePlaying){
        
        /*
        if (hitClicks > 13){
            disableHit();
        }
        */

        //1.Random number 
        var cardNum = Math.floor(Math.random() * 13) + 1;
    
        //2.Display the result
        var cardDOM = document.getElementById('card-'+hitClicks);
        cardDOM.style.display = 'block';
        cardDOM.src = 'card-' + cardNum + '.jpg';
        
        
        //3.Update the round score iF the card is NOT a 1 
        if (cardNum !== 1) {
            //add score
            document.getElementById('current-' + activePlayer).textContent = roundScore;
            roundScore += cardNum; //we can do this because roundScore is a global variable
            
        }
        if (cardNum == 1) {
            var option = document.getElementById('option-' + activePlayer).in;
        }
        
        else {
            //next player
            //nextPlayer();
            
            
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
        
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 
    
    
    document.getElementById('card-1').style.display = 'none';
    document.getElementById('card-2').style.display = 'none';
    document.getElementById('card-3').style.display = 'none';
    document.getElementById('card-4').style.display = 'none';
    document.getElementById('card-5').style.display = 'none';
    document.getElementById('card-6').style.display = 'none';
    document.getElementById('card-7').style.display = 'none';
    document.getElementById('card-8').style.display = 'none';
    document.getElementById('card-9').style.display = 'none';
    document.getElementById('card-10').style.display = 'none';
    
    
    
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    /*
    document.querySelector('.btn-flip').addEventListener('click', function() {
   
    // get random number
    var backCardNum = Math.floor(Math.random() * 13) + 1;
    
    
    //display result on back card
    var backCardDOM = document.getElementById('card-back');
    backCardDOM.style.display = 'block';
    backCardDOM.src = 'card-' + backCardNum + '.jpg';
    return backCardNum;
    
    
    document.querySelector('.btn-flip').disabled = true;
    
});
*/
    document.querySelector('.btn-flip').onclick = function () {
        
    var backCardNum = Math.floor(Math.random() * 13) + 1;
    
    
    //display result on back card
    var backCardDOM = document.getElementById('card-back');
    backCardDOM.style.display = 'block';
    backCardDOM.src = 'card-' + backCardNum + '.jpg';
    disableFlip();
    return backCardNum;
        
    };
}







































