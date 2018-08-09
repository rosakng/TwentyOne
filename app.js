let roundScore, activePlayer, gamePlaying, num, backCardNum, add;

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
function disableHold () {
    document.querySelector('.btn-hold').disabled = true;
}
function disableEleven () {
    document.querySelector('.eleven').disabled = true;
}
function disableOne () {
    document.querySelector('.one').disabled = true;
}

function check () {
    if (roundScore === 21) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        querySelectorCards();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else if (roundScore > 21) {
        document.querySelector('#name-' + activePlayer).textContent = 'Loser!';
        querySelectorCards();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('loser');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
}


let hitClicks = 0;
document.querySelector('.btn-hit').addEventListener('click', function() {
    hitClicks += 1;

    // Random number
    const cardNum = Math.floor(Math.random() * 13) + 1;

    if (gamePlaying && cardNum !== 1) {
        // Display the result
        const cardDOM = document.getElementById('card-' + hitClicks);
        cardDOM.style.display = 'block';
        cardDOM.src = 'card-' + cardNum + '.jpg';
        roundScore += cardNum;
        document.getElementById('current-' + activePlayer).textContent = roundScore;


        check();
    } else if (cardNum === 1) {
        const cardDOM = document.getElementById('card-' + hitClicks);
        cardDOM.style.display = 'block';
        cardDOM.src = 'card-' + cardNum + '.jpg';

        document.getElementById('one-' + activePlayer).onclick = function() {
            add = 1;
            addRoundScore();
            // must disable all other functions

            check();
        };
        document.getElementById('eleven-' + activePlayer).onclick = function() {
            add = 11;
            addRoundScore();
            // must disable all other functions
            check();
        };
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // check if the player won the game
        if (roundScore === 21) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            querySelectorCards();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else if (roundScore > 21) {
            document.querySelector('#name-' + activePlayer).textContent = 'Loser!';
            querySelectorCards();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('loser');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function querySelectorCards () {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
}

function nextPlayer () {
    // next player
    // ternary operator
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // roundScore = 0;

    // document.getElementById('current-0').textContent = '0';
    // document.getElementById('current-1').textContent = '0';

    // switching active classes
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // making card disappear with a 1
    // -- turn off -- querySelectorCards();
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


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    document.querySelector('.btn-flip').onclick = function() {
        const backCardNum = Math.floor(Math.random() * 13) + 1;


        // display result on back card
        const backCardDOM = document.getElementById('card-back-' + activePlayer);
        backCardDOM.style.display = 'block';
        backCardDOM.src = 'card-' + backCardNum + '.jpg';

        if (backCardNum === 1) {
            document.getElementById('one-' + activePlayer).onclick = function() {
                add = 1;
                addRoundScore();

            // must disable all other functions
            };
            document.getElementById('eleven-' + activePlayer).onclick = function() {
                add = 11;
                addRoundScore();


            // must disable all other functions
            };
        } else {
            roundScore += backCardNum;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }

        // disableFlip();
        return backCardNum;
    };
}


function addRoundScore () {
    roundScore += add;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
}


